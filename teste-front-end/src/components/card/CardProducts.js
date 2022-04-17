import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react'
import { useProduct } from '../context/Product'
export default function CardProduct({props,onclick}){
    const {setProduct}=useProduct()
    const [favorite,setFavorite]=useState(false)

    let price= JSON.stringify(props.price)
    const Last= price.substring(price.length-2)
    const Price= price.substring(0,price.length-2)
    
    return(
        <>
        <div className='Card-Product' onClick={()=>setProduct(props)}>
            <span className='discount'>40% OFF</span>
            <div className='main-info' onClick={(onclick)}>
                <img src={props.photo} alt={props.productName}/>
                <p className='name'>{props.productName}</p>
                <div className='price-info'>
                    <p className='past-price'>De R$ 96,69</p>
                    <p className='price-default'>Por <span>R$ {Price},{Last}</span></p>
                    <p className='price-signers'><span>R$ 85,69</span> Para assinantes</p>
                </div>
                <button>Adicionar</button>   
            </div>
            
            <span className={!favorite?'favorite':'favorite-active'} onClick={()=>setFavorite(!favorite)}>{favorite?<AiFillHeart/>:<AiOutlineHeart/>}</span>
           
        </div>

    
        </>
    )
}