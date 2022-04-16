import React,{createContext, useContext,useState} from "react";


export const OptionsContext = createContext()

export default function OptionsProvider({children}){
    const[option,setOption]=useState(0)

    return(
        <OptionsContext.Provider value={{
            option,setOption
        }}>
            {children}
        </OptionsContext.Provider>
    )
}


export function useOptions(){
    const Context = useContext(OptionsContext)
    if(!Context) throw  new Error ("useOptions  deve ser usado dentro do Count Provide")
    const {option,setOption}= Context
    return {option,setOption}
}