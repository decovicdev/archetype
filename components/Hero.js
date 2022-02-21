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
import React, { Fragment, useState , useEffect} from 'react'

import WaitlistModal from '@components/Modals/WaitlistModal'
import SideBySideFeatures from './LandingPage/SideBySideFeatures'
import Navbar from './CustomNavbar'
import JoinWaitlistButton from './Buttons/JoinWaitlistButton'

const navigation = [
  /*{ name: 'Documentation', href: 'https://docs.archetype.dev' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' }
  */
]

export default function Hero() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = ()=>{
    setAddModalOpen(false)
  }

  return (
    <div className="relative overflow-hidden bg-fullscreencover bg-cover">
    <WaitlistModal isOpen={addModalOpen} handleClose={handleClose} />
      <Navbar/>
      <main>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Generate revenue from APIs in minutes.</span>
                    <span className="block text-[#09E4A8]"></span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Archetype helps APIs launch, iterate, and scale paid business models, with billing infrastructure that works at any size and stage.
                  </p>
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md text-lg shadow">
                    <a href="/contact">
                      <JoinWaitlistButton onClick={handleAddClick}/>
                    </a>
                    </div>
                    {/*<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
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
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none animate-fade-in-down"
                    src="hero graphic (11).svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
        <SideBySideFeatures/>
        {/* More main page content here... */}

     
    </div>
  )
}
