import React from 'react'

function Machines() {
  return (
    <>
    <div className='flex flex-col relative top-[15rem] w-[22rem] mx-auto left-[1rem] sm:w-[34rem] sm:top-[20rem] xl:w-[90vw] xl:top-[5rem]'>
        <div className='font-semibold'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</div>

        <div className='w-[70vw] sm:w-[55vw] mx-auto mt-[1rem] cursor-pointer'>
            <img src="machines.png" />
        </div>

        <div className='mx-auto mt-[1rem] font-semibold'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>

        <div className="w-full h-[0.2rem] mt-[1rem] bg-red-500"></div>

    </div>    
    </>
  )
}

export default Machines
