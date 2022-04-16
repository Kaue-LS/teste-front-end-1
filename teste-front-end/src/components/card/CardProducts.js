import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react'
export default function CardProduct({props}){
    const [favorite,setFavorite]=useState(false)
    return(
        <section className='Card-Product'>
            <span className='discount'>40% OFF</span>
            <div className='main-info'>
                <img src={props.photo} alt={props.productName}/>
                <p className='name'>{props.productName}</p>
                <div className='price-info'>
                    <p className='past-price'>de asdasda</p>
                    <p className='price-default'>Por R$sda</p>
                    <p className='price-signers'><span>R$32342</span> para assinantes</p>
                </div>
                <button>Adicionar</button>   
            </div>
            
            <span className='favorite' onClick={()=>setFavorite(!favorite)}>{favorite?<AiFillHeart/>:<AiOutlineHeart/>}</span>
        </section>
    )
}