import React from "react";
import frontend from "../assets/img/guide_icons/frontend.svg"
import backend from "../assets/img/guide_icons/backend.svg"
import app from "../assets/img/guide_icons/app.svg"
import aiml from "../assets/img/guide_icons/aiml.svg"
import blockchain from "../assets/img/guide_icons/blockchain.svg"



const Resource = () => {
    return (
        <div>
          <h1 className="w-full py-16 text-white px-4 text-center text-5xl">Tech Resources for Developers</h1>

            
            <div className='flex flex-wrap mt-26 mb-24 justify-center gap-4 md:gap-4 sm:gap-4'>
                <a className='flex flex-col  bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }} href='https://github.com/FOSS-Community/website-fossc'>

                    <img src={frontend} alt='' className='w-[11.9rem] h-40 ml-6 mt-4 mb-3' />

                    <h2 className='text-center font-bold text-xl mb-0.5'>FRONTEND</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>The Complete Guide to Full-Stack </p>

                </a>

                <a className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }}>

                    <img src={backend} alt='' className='w-40 mx-11 mt-4 mb-3' />

                    <h2 className='text-center font-bold text-xl mb-0.5'>BACKEND</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>The Complete Guide to Full-Stack </p>

                </a>

                <a className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }}>

                    <img src={app} alt='' className='w-36 ml-16 -mb-0 mt-12 ' />

                    <h2 className=' text-center font-bold text-xl mb-0.5'>APP DEVELOPMENT</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>The Complete Guide to Full-Stack </p>

                </a>

                <a className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }} href='https://discord.com/channels/983838934624780288/986650931754053644'>

                    <img src={aiml}  alt='' className='w-96 mx-auto hover:fill-gray-900 -mt-2 -mb-20' />

                    <h2 className='text-center font-bold text-xl mb-0.5'>AI/ML</h2>

                    <p className='flex flex-col text-center text-white text-md px-4'>The Complete Guide <br></br> to  Full-Stack </p>

                </a>
                <a className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }} href='https://discord.com/channels/983838934624780288/986650931754053644'>

                    <img src={blockchain}  alt='' className='w-40 mx-auto hover:fill-gray-900 mt-10 -mb-4' />

                    <h2 className='text-center font-bold text-xl mb-0.5'>BLOCKCHAIN</h2>

                    <p className='flex flex-col text-center text-white text-md px-4'>The Complete Guide <br></br> to Full-Stack  </p>

                </a>
            </div>


        </div>

    );
};

export default Resource;