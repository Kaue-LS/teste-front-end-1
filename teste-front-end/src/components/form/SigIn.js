import {RiUserLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import '../../styles/Form.scss'

export default function SigIn(props){
    return(
        <div className='Form-SigIn'>
            <img src={props.image} alt=''/>
            <form>
                <label>Se inscreva para receber novidades e promoções</label>
                <div>
                    <RiUserLine/>
                    <input type={'text'} name='nome' placeholder='Digite seu nome' required/>
                </div>
                <div>
                    <AiOutlineMail/>
                    <input type={'email'} name='email' placeholder='Digite seu e-mail' required/>
                </div>

                <button>Enviar</button>
            </form>
        </div>
    )
}