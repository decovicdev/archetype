import React, { Fragment, useState , useEffect} from 'react'
import JoinWaitlistButton from './Buttons/JoinWaitlistButton'
import WaitlistModal from './Modals/WaitlistModal';
export default function FooterCTA() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = ()=>{
    setAddModalOpen(false)
  }

  return (
    <div>
      <div className=" rounded-lg mb-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block text-white">Ready to dive in?</span>
          <span className="block text-lg pt-2 text-white">Sign up to join our beta.</span>
        </h2>
        <div className="mt-8 flex">
          <div className="rounded-md shadow">
          <JoinWaitlistButton onClick={handleAddClick}/>
          
          <WaitlistModal isOpen={addModalOpen} handleClose={handleClose}/>
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
  )
}
