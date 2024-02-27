import React from 'react'

function Hero() {
    return (
        <>
            <div className="sm:flex sm:flex-col xl:flex">
                <div className='sm:flex sm:justify-center xl:justify-start'> 
                    <img className="cursor-pointer relative sm:h-[60rem] sm:relative sm:top-[2rem] xl:w-[30vw] xl:h-[40rem] xl:left-[0]" src="trophy.png" />
                </div>

                <div className='sm:flex sm:justify-center xl:justify-start'>
                    <img className="cursor-pointer relative top-[2rem] h-[30rem] sm:h-[30rem] sm:relative sm:top-[8rem] xl:h-[29rem] xl:absolute xl:top-[17rem] xl:left-[35rem]" src="hero.png" />
                </div>  

                <div className='relative top-[3rem] font-bold w-[22rem] mx-auto sm:relative sm:top-[10rem] sm:w-[34rem] xl:absolute xl:top-[9rem] xl:left-[34rem] xl:w-[58rem] xl:mx-0' >C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</div>
                <ul className='list-disc relative top-[5rem] text-md font-semibold w-[22rem] mx-auto sm:relative sm:top-[12rem] sm:list-disc sm:left-[3rem] sm:font-semibold sm:w-[34rem] xl:absolute xl:left-[37rem] xl:top-[11rem] xl:list-disc xl:text-sm xl:font-semibold xl:mx-0 xl:w-[58rem]'>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <div className='relative top-[8rem] font-semibold mx-auto sm:relative sm:top-[14rem] sm:w-[34rem] xl:relative xl:top-[0rem] xl:left-[34rem] w-[22rem] xl:w-[58rem] xl:mx-0'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
            </ div>
        </>
    )
}

export default Hero
