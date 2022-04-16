import "../../styles/Carrousel.scss";
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
export default function Carousel(props) {
  return (
    <section className="Carrousel">
        <div className="Carrousel-Buttons">
        <div className="Left-Button Button">
            <AiOutlineLeft/>
        </div>  
    <div className="Middle-Footer-Buttons">
        <div className="Middle-Button ">
            <h3>As melhores guias para os melhores passeios.</h3>
            <button>Confira</button>
        </div>
        <div className="Footer-Button">
            <div>
            <div className="Active"></div>
            <div></div>
            <div></div>
            </div>
            <div  className="Icon-Down">
            <AiOutlineDown/>
            </div>
        </div>
        </div>
        <div className="Rigth-Button Button">
            <AiOutlineRight/>
        </div>
        </div>
        <img className="Carrousel-Images" src={props.images} alt=''/>
    </section>
  );
}
