import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  // element select Option
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState("");
  const [isOption, setIsOption] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  // detail input
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [companyName, setCompanyName] = useState("Company Name");
  const [website, setWebsite] = useState("Website");
  const [email, setEmail] = useState("Email");
  const [message, setMessage] = useState("Message");
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
    const url = "https://api.archetype.dev/v1";

    const listOption = list.filter((el) => el.isActive === true);

    const dataInput = {
      name: firstName + lastName,
      email: email,
      company: companyName,
      website: website,
      stack: message,
    };
    fetch(`${url}/contact`, {
      method: "POST",
      body: dataInput,
      headers: {
        "Access-Control-Request-Method": "*",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //action selected option
  const handleSelectOption = (name) => {
    setSelectOption(name);
    setIsOption(false);
  };
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container flex flex-col w-full mx-auto py-6">
        <h1 className="text-6xl font-bold font-sans">Let's get in touch</h1>
        <form
          className="flex sm:flex-col sm:justify-start md:flex-row md:justify-between gap-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:w-full md:w-2/4">
            {/* Checkbox */}
            <h3 className="text-xl font-bold font-sans mt-8 mb-2">
              Hey! I’d like to get started with {selectOption}
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
                  <div>label</div>
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
            <h3 className="text-xl font-bold font-sans mb-3">
              Here are my details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className={
                  firstName.length === 0
                    ? "form-control-invalid"
                    : "form-control"
                }
                placeholder={firstName.length === 0 ? "First Name" : firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className={
                  lastName.length === 0
                    ? "form-control-invalid"
                    : "form-control"
                }
                placeholder={lastName.length === 0 ? "Last Name" : lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              className={
                companyName.length === 0
                  ? "form-control-invalid"
                  : "form-control"
              }
              placeholder={
                companyName.length === 0 ? "Company Name" : companyName
              }
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              className={
                website.length === 0 ? "form-control-invalid" : "form-control"
              }
              placeholder={website.length === 0 ? "Website" : website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              type="email"
              className={
                email.length === 0 ? "form-control-invalid" : "form-control"
              }
              placeholder={email.length === 0 ? "Email" : email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={
                message.length === 0
                  ? "mt-4 h-52 textarea-invalid"
                  : "mt-4 h-52 form-control-textarea"
              }
              placeholder={message.length === 0 ? "Message" : message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex flex-col w-full justify-end items-end">
              <div
                className={
                  message.length === 0
                    ? "w-28 h-16 relative bottom-16 border-t border-l border-r border-red-500"
                    : "w-28 h-16 relative bottom-16 border-t border-l border-r border-black"
                }
              ></div>
              <div className="w-28 h-16 relative bottom-32 border-b border-r z-50 border-white"></div>
              <button
                type="submit"
                className="relative bottom-44 right-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-50 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full flex bg-yellow-200">
        <div className="container flex flex-col mx-auto py-20">
          <div className="flex flex-row justify-between mb-11 items-center">
            <div className="text-5xl font-bold">Join our team</div>
            <div>Logo Join us</div>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-5 animate-fade-in-down">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">NYC or Remote</h1>
              <p className="text-sm mt-3">
                Join our tiny and fast-growing team in New York. If you prefer
                remote, that works too—let us know.
              </p>
            </div>
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
    </>
  );
};
export default Contact;
