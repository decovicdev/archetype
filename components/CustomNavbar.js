/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import JoinWaitlistButton from "./Buttons/JoinWaitlistButton";
import WaitlistModal from "@components/Modals/WaitlistModal";

const navigation = [
  //{ name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = () => {
    setAddModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only"></span>
                  <img
                    className="h-8 w-auto sm:h-10 rounded-md"
                    src="https://res.cloudinary.com/getarchetype/image/upload/v1642630163/archetype_umafae.png"
                    alt=""
                  />
                </a>
                <span className="pl-3 font-extrabold text-white sm:text-3xl lg:mt- xl:text-6">
                  Archetype{" "}
                </span>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="https://airtable.com/shrjDMR7xCaC4iP22">
                <JoinWaitlistButton onClick={handleAddClick} />
              </a>
              <a
                key="twitter"
                href="https://twitter.com/getarchetype"
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">twitter</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
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
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="archetype.png" alt="" />
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
                  <JoinWaitlistButton onClick={handleAddClick} />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
