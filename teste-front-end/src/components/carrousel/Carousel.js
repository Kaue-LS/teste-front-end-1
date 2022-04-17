import "../../styles/Carrousel.scss";
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
export default function Carousel(props) {
  return (
    <section className={props.className}>
        <div className="Carrousel-Buttons">
            {props.showArrows&&(
                <div className="Left-Button Button">
                    <AiOutlineLeft/>
                </div>  
            )}
    
    
    <div className="Middle-Footer-Buttons">
        <div className="Middle-Button ">
            <h3>{props.text}</h3>
            {
                props.subtext&&(
                    <p>{props.subtext}</p>
                )
            }
            <button>
                {props.button}
            </button>
        </div>
        <div className="Footer-Button">
            <div>
            <div className="Active"></div>
            <div></div>
            <div></div>
            </div>
            {props.showArrows&&(
                 <div  className="Icon-Down">
                 <AiOutlineDown/>
                 </div>
            )}
           
        </div>
        </div>
        {props.showArrows&&(
             <div className="Rigth-Button Button">
             <AiOutlineRight/>
         </div>
        )}
       
        </div>
        <img className="Carrousel-Images" src={props.images} alt=''/>
    </section>
  );
}
