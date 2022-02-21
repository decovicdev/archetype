/* This example requires Tailwind CSS v2.0+ */

import React, { Fragment, useState , useEffect} from 'react'
import JoinWaitlistButton from "@components/Buttons/JoinWaitlistButton"


export default function BottomCTA() {
    const [addModalOpen, setAddModalOpen] = React.useState(false);

  const handleAddClick = () => {
    //setAddModalOpen(true);
  };
  const handleClose = ()=>{
    setAddModalOpen(false)
  }

    return (
      <div>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
                <JoinWaitlistButton onClick={handleAddClick}/>
            </div>
            <div className="ml-3 inline-flex">
            </div>
          </div>
        </div>
      </div>
    )
  }
  