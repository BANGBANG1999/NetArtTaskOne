import React from 'react'
import Line from './Line'


function Footer() {
    return (
        <>
            <div className='w-[80%] mx-auto font-bold w-[50vw] relative top-[20rem] sm:top-[21rem]  xl:w-[100vw] xl:relative xl:top-[8rem] xl:mx-auto xl:flex xl:justify-center xl:left-[0rem]'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>

            <div className='w-[80%] mx-auto font-semibold w-[26rem] relative top-[23rem] xl:w-[68rem] xl:top-[9rem]'>CHEMICALS & PROCESS <Line /> POWER <Line /> WATER & WASTE WATER <Line /> OILS & GAS <Line /> PHARMA <Line /> SUGARS & DISTILLERIES <Line /> PAPER & PULP <Line /> MARINE & DEFENCE <Line /> METAL & MINING <Line /> FOOD & BEVERAGE <Line /> PETROCHEMICAL & REFINERIES <Line /> SOLAR <Line /> BUILDING <Line /> HVAC <Line /> FIRE FIGHTING <Line /> AGRICULTURE & RESIDENTIAL</div>

            <div className='flex flex-col h-[9rem] xl:flex-row xl:justify-between xl:mx-auto xl:w-[90vw] xl:h-[6rem] bg-red-500 relative top-[26rem] mb-[27rem] items-center xl:top-[12rem] xl:mb-[13rem]'>
                <div className='xl:ml-[8rem] flex items-center text-white mx-auto mt-[1rem] xl:mt-[0rem]'> <i className="fa-solid fa-phone mb-3 xl:mb-[1.75rem]"></i><span className="ml-2 cursor-pointer">Toll free <b>1800 200 1234</b></span></div>
                <div className='cursor-pointer flex items-center text-white mx-auto mt-[1rem] xl:mt-[0rem]'><i className="fa-brands fa-facebook mb-3 xl:mb-[1.75rem]"></i><span className="ml-2">www.facebook.com/cripumps</span></div>
                <div className='cursor-pointer xl:mr-[8rem] flex items-center text-white mx-auto mt-[1rem] xl:mt-[0rem]'><i className="fa-solid fa-globe mb-3 xl:mb-[1.75rem]"></i><span className="ml-2">www.crigroups.com</span></div>
            </div>
        </>
    )
}

export default Footer
