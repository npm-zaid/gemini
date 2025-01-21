import React, { useContext } from 'react'
import { useState } from 'react';
import { Context } from './Context';

const Sidebar = () => {

  const {setshowResult,onsent,prevPrompt,}=useContext(Context)

    const [expand,setexpand]=useState(false);
    const func=()=>{
        setexpand(!expand)
    }

  return (
    <div  className={`sidebar ${expand?'w-[100vw] sm:w-[30vw]':"w-[0vw] sm:w-[6vw]"} h-[100vh] transition-all ease-out duration-500 bg-[#131314] sm:bg-[#1E1F20] sm:px-3 sm:py-6 text-gray-300 flex flex-col justify-between gap-2`}>
    <div className="TOP h-[60%] text-gray-400 ">
    <i onClick={func} class="ri-menu-fill inline text-2xl hover:text-white  hover:bg-zinc-700 p-2 ml-1 rounded-full cursor-pointer"></i>
    <div className='bg-[#131314] hover:bg-zinc-800 mt-10 flex items-center rounded-full w-fit ml-1'>
    <i onClick={()=>setshowResult(false)} className="ri-add-fill text-2xl  px-2 py-1 cursor-pointer"></i>
    {expand?<span className='text-nowrap px-2 pr-4'>New Chat</span>:null}
    </div>

{expand? <div className='mt-10'>
      <p className='mb-2 px-3'>Recent</p>
      <div className=' overflow-y-scroll h-[20vh] scroller'>
      {prevPrompt.map((item)=>{
        return(
        <div className='flex cursor-pointer items-center hover:text-white hover:bg-zinc-800 px-4  py-1 gap-5 rounded-full'>
      <i class="ri-chat-4-line text-lg"></i>
      <span className='text-nowrap'>{item.slice(0,18)}...</span>
      </div>
        )
      })}
      </div>
    </div>:null}
   

    </div>
    <div className="BOTTOM h-[40%]  px-2 text-gray-400">
    <div className={`hover:bg-zinc-800 hover:text-white   rounded-full  py-1  ${expand?'text-start':'text-center'}`}>
    <i  className="ri-vip-diamond-line text-lg p-2 hover:bg-zinc-700 rounded-full "></i>
    {expand?<span className='text-nowrap ml-3 py-1'>Gem Manager</span>:null}
    </div>
    <div className={`hover:bg-zinc-800 hover:text-white  rounded-full py-1  ${expand?'text-start':'text-center'}`}>
    <i className="ri-question-line text-lg p-2 hover:bg-zinc-700 rounded-full"></i>
    {expand?<span className='text-nowrap ml-3 py-1'>Help</span>:null}
    </div>
    <div className={`hover:bg-zinc-800 hover:text-white  rounded-full py-1  ${expand?'text-start':'text-center'}`}>
    <i className="ri-history-fill text-lg p-2 hover:bg-zinc-700 rounded-full"></i>
    {expand?<span className='text-nowrap ml-3 py-1'>Activity</span>:null}
    </div>
    <div className={`hover:bg-zinc-800 hover:text-white  rounded-full py-1  ${expand?'text-start':'text-center'}`}>
    <i className="ri-settings-5-line text-lg p-2 hover:bg-zinc-700 rounded-full"></i>
    {expand?<span className='text-nowrap ml-3 py-1'>Settings</span>:null}
    </div>
    </div>
    </div>
  )
}

export default Sidebar
