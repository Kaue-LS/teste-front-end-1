import '../../styles/Options.scss'
import { useEffect} from 'react'

import { useOptions } from '../context/OptionsContext'
export default function Options({options}){
    const {option,setOption}= useOptions()
    const limit = options.length

    // console.log(limit)
    // const [active,setActive]=useState(false)
    useEffect(()=>{
        if(option>4){
            setOption(0)
        }
        else if(option<0)
        {
            setOption(4)
        }
        switch (option) {
            case 0:
                document.getElementById('Option-'+(4)).classList.remove('Active')
                document.getElementById('Option-'+option).classList.add('Active')
                document.getElementById('Option-'+(option+1)).classList.remove('Active')

            break
            case 1:
                document.getElementById('Option-'+(option-1)).classList.remove('Active')
                document.getElementById('Option-'+option).classList.add('Active')
                document.getElementById('Option-'+(option+1)).classList.remove('Active')
            break
            case 2:
                document.getElementById('Option-'+(option-1)).classList.remove('Active')
                document.getElementById('Option-'+option).classList.add('Active')
                document.getElementById('Option-'+(option+1)).classList.remove('Active')
            break
            case 3:
                document.getElementById('Option-'+(option-1)).classList.remove('Active')
                document.getElementById('Option-'+option).classList.add('Active')
                document.getElementById('Option-'+(option+1)).classList.remove('Active')
            break
            case 4:
                document.getElementById('Option-'+(option-1)).classList.remove('Active')
                document.getElementById('Option-'+option).classList.add('Active')
                document.getElementById('Option-'+(0)).classList.remove('Active')
            break
            default: console.log("nenhuma"+ option)
        }
    },)
    
        // console.log(props)

        
    return(
        <div className='Buttons'>
            {options.map((item,index)=>(
                <span key={index} id={'Option-'+item.id} name={`button`}  className={`Option-${item.id}`} >{item.title}</span>  
            ))
            }
        </div>
    )
}