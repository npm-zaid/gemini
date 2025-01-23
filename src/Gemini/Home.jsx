import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import pic from "./gemini_ai.svg";
import pic2 from "./char-transformed.jpeg";
import { useState } from "react";
import { Context } from "./Context";

const Home = () => {

  let name = prompt("Enter your name")
  const {onsent,input,setinput,showResult,recentPrompt,resultData,loading}=useContext(Context)

  const [expand, setexpand] = useState(false);
  const func = () => {
    setexpand(!expand);
  };

  const [menu,setmenu]=useState(false);
  const toggleMenu=()=>{
    setmenu(!menu)
  }

  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="h-screen w-full bg-[#131314]">
        <nav className="flex justify-between sm:p-4 p-3">
          <div onClick={toggleMenu} className="cursor-pointer relative text-gray-100 text-2xl sm:text-xl sm:hover:bg-[#282A2C] sm:px-3 py- rounded-lg flex items-center">
  {menu?<div className="absolute rounded-xl top-[120%] left-0 bg-zinc-800 w-[75vw] sm:w-[25vw] p-3">
    <div>
      <div className="flex gap-3 text-sm  items-center"> 
        <img className="inline w-6" src={pic} /><div ><p>Gemini</p><p>with 1.5 Flash</p></div>
        <i className="ri-verified-badge-line text-xl ml-auto"></i>
        </div>

        <div className="flex gap-2 text-sm  items-center mt-2"> 
        <img className="inline w-6  opacity-50" src={pic} /><div className=" opacity-50" ><p>Gemini Advanced</p><p>with 1.5 Pro</p></div>
        <a href="https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=mode_switcher&g1_" className="bg-zinc-700 hover:bg-zinc-600 hover:text-blue-200 px-4 py-2 rounded-full  ml-auto">Upgarde</a>
        </div>
      
    </div>
  </div>:null}
  
            Gemini
            <i className="ri-arrow-drop-down-fill   sm:text-[2.3vw] text-[10vw]  mt-[5px] leading-3 "></i>
          </div>

          <div className="text-gray-100 flex gap-5 justify-center items-center">
            <a
              className="hidden sm:inline-block text-sm px-5 py-2  capitalize rounded-lg bg-[#282A2C] hover:bg-[#4C4E51]"
              href="https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65"
            >
              <img className="inline mr-2 w-5" src={pic} />
              try gemini advanced
            </a>
            <i className="ri-apps-fill text-[7vw] sm:text-[2vw] transform transition-all ease-out duration-500 hover:text-[#4b90ff] hover:scale-125"></i>
            <img className="w-[12vw] sm:w-[3vw] rounded-full" src={pic2} />
          </div>
        </nav>
        
         <div className="MAIN h-[80vh]  sm:max-w-[70vw] m-auto  flex flex-col justify-between p-4 sm:p-0">
          
            {
            !showResult?<div className="upper mt-20">
              <h1 className="text-[13vw] sm:text-[4.4vw] font-[600] bg-gradient-to-r from-[#4b90ff]  to-[#ff5546] inline-block text-transparent bg-clip-text">
                Hello,{name}
              </h1>
              <p className="text-[10vw] sm:text-[4.4vw] font-[600] leading-[3rem] text-[#444746]">
                How can I help you today?
              </p>
            </div>: 
            <div className=" scroller text-gray-300   overflow-y-scroll">
            <div className="flex gap-5 items-center mb-8">
              <img className="w-12 rounded-full" src={pic2}/>
              <p className="text-2xl bg-gradient-to-r from-[#4b90ff]  to-[#ff5546]  text-transparent bg-clip-text">{recentPrompt}</p>
            </div>

            <div className="flex gap-2 items-start">
            <img className={`w-8 ml-2`} src={pic}/>
            {loading?<div className='flex flex-col gap-3 w-full'>
            <div className='bg-gradient-to-r from-[#5684D1] via-[#131314] to-[#5684D1] p-2 load rounded-[4px]'></div>
            <div className='bg-gradient-to-r from-[#5684D1] via-[#131314] to-[#5684D1] w-[90%] p-2 load rounded-[4px]'></div>
            <div className='bg-gradient-to-r from-[#5684D1] via-[#131314] to-[#5684D1]  w-[75%] p-2 load rounded-[4px]'></div>
          </div>: <p dangerouslySetInnerHTML={{__html:resultData}}  className='leading-8 text-lg pr-5'></p>}
            </div>

          </div>
          }
            <div className="bottom">
              <div className="input bg-[#1E1F20] p-5 rounded-full flex justify-between">
                <input
                onChange={(e)=>setinput(e.target.value)}
                value={input}
                  placeholder="Enter a prompt here"
                  type="text"
                  className="bg-transparent placeholder-[#444746]  w-full border-none outline-none text-[#E3E3E3]"
                ></input>
                <div className="text-gray-400  text-xl flex gap-5">
                  <i className=" ri-image-add-line"></i>
                  <i className=" ri-mic-line"></i>
                  <i onClick={()=>onsent()} className="hover:text-white ri-send-plane-2-line cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
         
          
         
        </div>
      </div>
    
  );
};

export default Home;
