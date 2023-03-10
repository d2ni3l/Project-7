import React, { useState, useEffect } from "react";

import Header from "./Header.jsx";
import ChangeStepfooter from "./ChangeStepfooter";

function FirstStep({ handleName, handleEmail }) {
  const [nextStep, setNextStep] = useState("/secondstep");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    handleName(name);
    handleEmail(email);
  }, [name, email]);

  return (
    <>
      <Header selected1={true} steps={true} />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 md:mx-32 lg:mx-64 xl:mx-[25rem] md:py-16 rounded-md p-6 mx-2'>
        <h1 className='text-[#0d274f] font-bold text-2xl '>Personal info</h1>
        <p className='text-[#b0afb4] font-medium text-md'>
          Please provide your name, email address and phone number.
        </p>

        <form action='' className='flex flex-col justify-start gap-1'>
          <div className='py-1'></div>
          <label htmlFor='name' className='text-[#0d274f] text-sm font-medium'>
            Name
          </label>
          <input
            type='text'
            className='outline outline-2 outline-[#dbdae0] rounded-md py-[7px] px-2 focus:outline-[#554f95] focus:outline-2 focus:border-none focus:outline mt-1 placeholder:text-xs placeholder:font-medium'
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder='e.g. John Giovanni'
          />
          <div className='py-1'></div>
          <label htmlFor='email' className='text-[#0d274f] text-sm font-medium'>
            Email Address
          </label>
          <input
            type='email'
            required
            className='outline outline-2 outline-[#dbdae0] rounded-md focus:outline-[#554f95] focus:outline-2 focus:border-none focus:outline py-[8px] px-2 mt-1 placeholder:text-xs placeholder:font-medium'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='e.g. johngiovann1@gmail.com '
          />
          <div className='py-1'></div>

          <label htmlFor='phone' className='text-[#0d274f] text-sm font-medium'>
            Phone Number
          </label>
          <input
            type='number'
            placeholder='e.g. +1 234 567 890'
            className='outline outline-2 outline-[#dbdae0] rounded-md focus:outline-[#554f95] focus:outline-2 focus:border-none focus:outline py-[8px] px-2 mt-1 placeholder:text-xs placeholder:font-medium mb-4'
          />
        </form>
      </div>

      <ChangeStepfooter to={nextStep} goBack={false} />
    </>
  );
}

export default FirstStep;
