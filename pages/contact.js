import Head from "next/head";
import React, { Fragment, useState , useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import JoinWaitlistButton from "@components/Buttons/JoinWaitlistButton";
import Footer from "@components/Footer";
const navigation = [
  /*{ name: 'Documentation', href: 'https://docs.archetype.dev' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' }
  */
]

const Contact = () => {
  // element select Option
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    status: 0,
    statusText: "",
  });
  const [isOption, setIsOption] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  // detail input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //errors
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
  });

  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = ()=>{
    setAddModalOpen(false)
  }

  // list checkbox
  const [list, setList] = useState([
    {
      label: "Ecommerce",
      description: "Tap for Ecommerce",
      value: "ecommerce",
      isActive: false,
    },
    {
      label: "Tips",
      description: "Tap for creators",
      value: "tips",
      isActive: false,
    },
    {
      label: "Digital Assets",
      description: "Tap for creators",
      value: "digital assets",
      isActive: false,
    },
    {
      label: "Wallet",
      description: "Business wallet",
      value: "walet",
      isActive: false,
    },
    {
      label: "SDK",
      description: "For Developers",
      value: "sdk",
      isActive: false,
    },
    {
      label: "Something Else",
      description: "YA FEEL",
      value: "something else",
      isActive: false,
    },
  ]);
  //action checkbox
  const handleCheckbox = (idx) => {
    const update = list.map((el, elIdx) => {
      if (elIdx === idx) {
        return { ...el, isActive: !el.isActive };
      } else {
        return el;
      }
    });
    setList(update);
  };
  //action submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const url = "https://api.archetype.dev/v1";

    // const listOption = list.filter((el) => el.isActive === true);
    let isWebsite = false;

    if (website.length > 0) {
      const re =
        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (re.test(website) === true) {
        isWebsite = true;
      } else {
        isWebsite = false;
      }
    }
    setError({
      firstName: firstName.length === 0 ? "Invalid First Name" : "",
      lastName: lastName.length === 0 ? "Invalid Last Name" : "",
      email: email.length === 0 ? "Invalid Email Name" : "",
      website:
        website.length > 0
          ? isWebsite === false
            ? "Invalid Website (ex: http://google.com)"
            : ""
          : "",
    });
    const dataInput = {
      name: firstName + lastName,
      email: email,
      company: companyName.length === 0 ? " " : companyName,
      website: website.length === 0 ? " " : website,
      stack: message,
    };
    if (firstName.length > 0 && lastName.length > 0 && email.length > 0) {
      let send = false;
      if (website.length > 0) {
        send = isWebsite === true ? true : false;
      } else {
        send = true;
      }

      if (send === true) {
        fetch(`${url}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataInput),
        })
          .then((res) => {
            const { status, statusText } = res;
            setAlert({ status, statusText });
            setIsLoading(false);
            setError({
              firstName: "",
              lastName: "",
              email: "",
              website: "",
            });
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setWebsite("");
            setEmail("");
            setMessage("");
            setSelectOption("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setIsLoading(false);
      setAlert({
        status: 0,
        statusText: "",
      });
      console.log("error");
    }
    setTimeout(() => {
      setAlert({
        status: 0,
        statusText: "",
      });
    }, 5000);
  };
  //action selected option
  const handleSelectOption = (name) => {
    setSelectOption(name);
    setIsOption(false);
  };
  return (
    <div className="relative overflow-hidden bg-fullscreencover bg-cover pb-8" >
      <Head>
        <title>Contact</title>
      </Head>
      <div>
      <Popover as="header" className="relative overflow-hidden bg-fullscreencover bg-cover pb-8">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only"></span>
                  <img
                    className="h-8 w-auto sm:h-10 rounded-md"
                    src="https://res.cloudinary.com/getarchetype/image/upload/v1642630163/archetype_umafae.png"
                    alt=""
                  />
                </a>
                <span className="pl-3 text-white font-extrabold font-extrabold text-white sm:text-3xl lg:mt- xl:text-6">Archetype </span>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/*<div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
                */}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <JoinWaitlistButton onClick={handleAddClick}/>
            <a key="twitter" href="https://twitter.com/getarchetype" className="text-white hover:text-gray-500">
              <span className="sr-only">twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="archetype.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                    <JoinWaitlistButton onClick={handleAddClick}/>
                </div>
                
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="bg-white">
      <main>
      <div className="container flex flex-col w-full mx-auto py-6">
        <h1 className="text-6xl font-bold font-sans mb-10">
          Let's get in touch
        </h1>
        <form
          className="flex sm:flex-col sm:justify-start md:flex-row md:justify-between gap-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:w-full md:w-2/4">
            {/* Checkbox */}
            <h3 className="text-xl font-bold font-sans mb-2">
              Hey! I’d like to get started with
            </h3>
            <div className="grid grid-cols-3 gap-2 w-full h-30 grid-flow-row ">
              {list.map((el, idx) => {
                return (
                  <label
                    key={idx}
                    className={
                      el.isActive === true
                        ? "relative px-2 py-2 pb-3 shadow-sm border-2 border-black"
                        : "relative px-2 py-2 pb-3 shadow-sm border-2 border-gray-100"
                    }
                  >
                    <div className="absolute top-0 bottom-0 left-0 right-0 block w-full h-full m-0 cursor-pointer"></div>
                    <input
                      type="checkbox"
                      className="opacity-0 absolute -z-10 box-border appearance-none"
                      value={el.value}
                      onClick={(e) => handleCheckbox(idx)}
                    />
                    <span
                      className={
                        el.isActive === true
                          ? "text-black text-xs"
                          : "text-gray-600 text-xs"
                      }
                    >
                      {el.label} {el.isActive}
                    </span>
                    <p
                      className={
                        el.isActive === true
                          ? "text-black text-xs"
                          : "text-gray-400 text-xs"
                      }
                    >
                      {el.description.toUpperCase()}
                    </p>
                  </label>
                );
              })}
            </div>
            {/* Select */}
            <div className="flex flex-col w-full h-auto mt-10">
              <h3 className="text-xl font-bold font-sans">
                I’d describe myself as a
              </h3>
              <div
                className={
                  isOption === true
                    ? "flex flex-col w-full mt-2 cursor-pointer border-l border-r border-t border-black "
                    : "flex flex-col w-full mt-2 cursor-pointer border border-black "
                }
              >
                <div
                  className="flex flex-row justify-between py-3 px-3 items-center"
                  onClick={() => setIsOption(!isOption)}
                >
                  <div>
                    {selectOption.length > 0 ? selectOption : "Pick an option"}
                  </div>
                  <div
                    className={
                      isOption === true
                        ? "bg-icon-arrow-down bg-no-repeat bg-auto px-2 py-2 border-t border-l border-r rotate-180 animate-up"
                        : "bg-icon-arrow-down bg-no-repeat bg-auto px-2 py-2 rotate-0 animate-down"
                    }
                  ></div>
                </div>
              </div>
              <div
                className={
                  isOption === true
                    ? "flex flex-col w-full max-h-44 overflow-auto px-3 pb-3 border-l border-r border-b border-black animate-fade-in-down"
                    : "hidden"
                }
              >
                <ul>
                  <li>
                    <a href="#" onClick={() => handleSelectOption("creator")}>
                      Creator
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleSelectOption("business")}>
                      Business (founder/owner/employee)
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleSelectOption("developer")}>
                      Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleSelectOption("something else")}
                    >
                      something else
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:w-full md:w-2/4">
            <h3 className="text-xl font-bold font-sans">Here are my details</h3>
            <div
              className={
                alert.status === 200
                  ? "block bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 mt-2 mb-3"
                  : "hidden"
              }
              role="alert"
            >
              {alert.statusText.length > 0 ? alert.statusText : "Success"}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  type="text"
                  className={
                    error.firstName.length > 0 && firstName.length === 0
                      ? "form-control-invalid"
                      : "form-control"
                  }
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <span
                  className={
                    error.firstName.length > 0 && firstName.length === 0
                      ? "block text-red-500 text-sm"
                      : "hidden"
                  }
                >
                  {error.firstName}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  className={
                    error.lastName.length > 0 && lastName.length === 0
                      ? "form-control-invalid"
                      : "form-control"
                  }
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <span
                  className={
                    error.lastName.length > 0 && lastName.length === 0
                      ? "block text-red-500 text-sm"
                      : "hidden"
                  }
                >
                  {error.lastName}
                </span>
              </div>
            </div>

            <input
              type="text"
              className="mt-4 form-control"
              placeholder="Company (Optional)"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />

            <input
              type="text"
              className="mt-4 form-control"
              placeholder="Website (Optional)"
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
            <span
              className={
                error.website.length > 0
                  ? "block text-red-500 text-sm"
                  : "hidden"
              }
            >
              {error.website}
            </span>
            <input
              type="email"
              className={
                error.email.length > 0 && email.length === 0
                  ? "mt-4 form-control-invalid"
                  : "mt-4 form-control"
              }
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span
              className={
                error.email.length > 0 && email.length === 0
                  ? "block text-red-500 text-sm"
                  : "hidden"
              }
            >
              {error.email}
            </span>
            <textarea
              className="h-32 form-control-textarea mt-4"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <div className="flex flex-col w-full justify-end items-end">
              <div className="w-28 h-16 relative bottom-16 border-t border-l border-r border-black"></div>
              <div className="w-28 h-16 relative bottom-32 border-b border-r z-50 border-white"></div>
              <button
                type="submit"
                className="relative bottom-44 right-1 btn-primary z-50 cursor-pointer"
              >
                {isLoading === true ? "Loading" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      </main>
      </div>
      <div className="w-full relative overflow-hidden bg-fullscreencover bg-cover pb-8">
        <Footer/>
        <div className="container flex flex-col mx-auto py-20 opacity-0">
        
          <div className="grid grid-cols-3 grid-flow-row gap-5 animate-fade-in-down">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Fast-moving</h1>
              <p className="text-sm mt-3">
                We love moving fast. Join us if you like shipping product
                quickly without sacrificing on quality. Speed is life.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Ambitious</h1>
              <p className="text-sm mt-3">
                We’re transforming a massive industry. It’s not easy, but it’s a
                good time and the perfect place to challenge your abilities.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/*
      <div className="w-full flex bg-black text-white py-20">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-row justify-start">
            <div>
              <a href="#">Tap</a>
              <p>At Tap we’re building the future of payment interfaces.</p>
            </div>
          </div>
        </div>
      </div>
      */}
       </div>
     
    </div>
  );
};
export default Contact;
