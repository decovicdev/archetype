/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, useState, useEffect } from "react";

import WaitlistModal from "@components/Modals/WaitlistModal";
import { Popover, Transition } from "@headlessui/react";
import SideBySideFeatures from "./LandingPage/SideBySideFeatures";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Navbar from "./CustomNavbar";
import JoinWaitlistButton from "./Buttons/JoinWaitlistButton";
import TestNavBar from "./TestNavBar";
const navigation = [
  /*{ name: 'Documentation', href: 'https://docs.archetype.dev' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' }
  */
];

export default function Hero() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = () => {
    setAddModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden bg-fullscreencover bg-cover">
      <WaitlistModal isOpen={addModalOpen} handleClose={handleClose} />
      <Popover as="header" className="relative">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6"
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
                <span className="pl-3 font-extrabold text-white sm:text-3xl lg:mt- xl:text-6">
                  Archetype{" "}
                </span>
                <div className="-mr-2 flex items-center md:hidden">
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
                  {/*<Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>*/}
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
              <JoinWaitlistButton onClick={handleAddClick} />
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
                  {/*<JoinWaitlistButton onClick={handleAddClick}/>*/}
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
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div className="pt-10 lg:pt-16 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 lg:max-w-2xl lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white lg:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">
                    Generate revenue from APIs in minutes.
                  </span>
                  <span className="block text-[#09E4A8]"></span>
                </h1>
                <p className="mt-3 text-base text-gray-300 lg:mt-5 lg:text-lg xl:text-xl">
                  Archetype helps APIs launch, iterate, and scale paid business
                  models, with billing infrastructure that works at any size and
                  stage.
                </p>
                <div className="mt-10 lg:flex lg:justify-start">
                  <div className="rounded-md text-lg">
                    <JoinWaitlistButton onClick={handleAddClick} />
                  </div>
                  {/*<div className="mt-3 rounded-md shadow lg:mt-0 lg:ml-3">
                        <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                        >
                        Live demo
                        </a>
                    </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 lg:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 lg:max-w-2xl lg:px-6 ">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full sm:w-auto lg:max-w-none animate-fade-in-down"
                  src="hero-image.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBySideFeatures />
      {/* More main page content here... */}
    </div>
  );
}
