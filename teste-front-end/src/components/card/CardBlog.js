import "../../styles/Blog.scss"
export default function CardBlog({url}){
    console.log(url)
    return(
        <div className="Blog">
            <img src={url} alt=''/>
            <div className="Blog-Info ">
                <h4>
                Lorem ipsum dolor sit amet consectetur.
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                </p>
                <button>Ler artigo</button>
            </div>    
        </div>
    )
}