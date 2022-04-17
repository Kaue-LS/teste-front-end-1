import { useProduct } from "../context/Product"
import '../../styles/Modal.scss'
export default function CardOpenProduct({closeModal}){
    const {product}=useProduct()
    console.log(product)
    let price= JSON.stringify(product.price)
    const Last= price.substring(price.length-2)
    const Price= price.substring(0,price.length-2)
    return(
        <div className="Modal">
            <img src={product.photo} alt={product.productName}/>
            <div className="Modal-Info">
                <span onClick={closeModal}>X</span>
                <p className="Name">{product.productName}</p>
                <p className="Price">R$ {Price},{Last}</p>
                <article>{product.descriptionShort}</article>

                <p className="Detail">Veja mais detalhes do produto</p>
            </div>
        </div>
    )
}