import { useEffect } from 'react'
import '../../styles/Dots.scss'
import { useDots } from '../context/DotProducts'
export default function Dot({props}){
    const {dot} =  useDots()
    const data=[]
    for (let index = 0; index < props; index++) {
        data.push(index)
    }
    useEffect(()=>{
        switch (dot) {
            case dot:
                document.getElementById('dot-'+dot).classList.add('active')
                break;
        
            default:
                break;
        }
    })
    // console.log(data)

    return( 
        <div className='Dots'>
        {
            data.map((index)=>(
                <div id={"dot-"+index} className={'button-dot dot-'+index} key={index}></div>
            ))
        }
        </div>
    )
}