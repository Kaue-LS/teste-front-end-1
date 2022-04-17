import React,{createContext, useContext,useState} from "react";


export const ProductsContext = createContext()

export default function ProductsProvider({children}){
    const[product,setProduct]=useState(0)

    return(
        <ProductsContext.Provider value={{
            product,setProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}


export function useProduct(){
    const Context = useContext(ProductsContext)
    if(!Context) throw  new Error ("useOptions  deve ser usado dentro do Count Provide")
    const {product,setProduct}= Context
    return {product,setProduct}
}