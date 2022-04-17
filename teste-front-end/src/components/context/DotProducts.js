import React,{createContext, useContext,useState} from "react";


export const DotsProductsContext = createContext()

export default function DotsProductsProvider({children}){
    const[dot,setDot]=useState(0)

    return(
        <DotsProductsContext.Provider value={{
            dot,setDot
        }}>
            {children}
        </DotsProductsContext.Provider>
    )
}


export function useDots(){
    const Context = useContext(DotsProductsContext)
    if(!Context) throw  new Error ("useOptions  deve ser usado dentro do Count Provide")
    const {dot,setDot}= Context
    return {dot,setDot}
}