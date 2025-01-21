import { createContext, useState } from "react";
import run from "./Api";

export const Context = createContext()

const ContextProvider = ({children}) => {

    const [input,setinput]=useState("");
    const [recentPrompt,setrecentPrompt]=useState("");
    const [prevPrompt,setprevPrompt]=useState([]);
    const [showResult,setshowResult]=useState("");
    const [loading,setloading]=useState(false);
    const [resultData,setresultData]=useState("")

    const onsent = async (prompt)=>{
        setresultData("")
        setloading(true)
        setshowResult(true)
        setrecentPrompt(input)
        setprevPrompt(prev=>[...prev,input])
       const Response = await run(input)
       let edit = Response.split("**")
       let newresponse="";
       for(let i=0; i<edit.length; i++){
        if(i%2==0){
            newresponse += edit[i]
        }
        else{
            newresponse += `<b style="color:white">${edit[i]}</b>`

        }
       }

       let lastresponse = newresponse.split("*").join("<br/>");
       
       setresultData(lastresponse)
       setloading(false)
       setinput("")
    }

    const ContextValues={
        onsent,
        input,setinput,
        recentPrompt,setrecentPrompt,
        prevPrompt,setprevPrompt,
        showResult,setshowResult,
        loading,setloading,
        resultData,setresultData,
    }

    return (
        <Context.Provider value={ContextValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider