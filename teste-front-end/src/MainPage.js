import styles from "./styles/MainPage.module.scss";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import Carousel from "./components/carrousel/Carousel";
import CarouselCategory from "./components/carrousel/CarouselCategory";
import CarouselProducts from "./components/carrousel/CarouselProducts";

import BackgroundImage from "../src/styles/img/background.png";

import Dog1 from "./styles/img/category/dog1.png";
import Dog2 from "./styles/img/category/dog2.png";
import Dog3 from "./styles/img/category/dog3.png";
import Dog4 from "./styles/img/category/dog4.png";

import Marc1 from './styles/img/marcs/buddy.png'
import Marc2 from './styles/img/marcs/kong.png'
import Marc3 from './styles/img/marcs/petgames.png'

import backgroundDog1 from '../src/styles/img/background-dog1.png'
import backgroundDog2 from '../src/styles/img/background-dog2.png'

import Blog1 from '../src/styles/img/blog/blog1.png'
import Blog2 from '../src/styles/img/blog/blog2.png'
import Blog3 from '../src/styles/img/blog/blog3.png'
import Blog4 from '../src/styles/img/blog/blog4.png'

import Insta1 from '../src/styles/img/instagram/insta1.png'
import Insta2 from '../src/styles/img/instagram/insta2.png'
import Insta3 from '../src/styles/img/instagram/insta3.png'

import FormDog from '../src/styles/img/formDog.png'

import {Api} from "./components/api/Api";
import { useEffect, useState } from "react";
import { useOptions } from "./components/context/OptionsContext";

import Card from "./components/card/Card";
import Options from "./components/options/Options";
import Dot from "./components/dot/Dot";
import CardOpenProduct from "./components/modal/CardOpenProduct";
import CardProduct from "./components/card/CardProducts";
import CardBlog from "./components/card/CardBlog";
import SigIn from "./components/form/SigIn";



export default function MainPage() {
  const {option,setOption}=useOptions()
  const [apiData,setApiData]=useState([])
  const [loadApi,setLoadApi]=useState(false)
  const [openProduct,setOpenProduct]=useState(false)
  // console.log(apiData)

  useEffect(()=>{
    if(!loadApi){
      const GetApi=async()=>{
      const res = await Api.get('')
      JSON.stringify(res)
      setApiData(res.data)
      setLoadApi(true)
      }
      GetApi()
    }
  },[loadApi,apiData])

  const CategoryList = [
    {
      Image: Dog1,
      Category: "Brinquedos",
    },
    { Image: Dog2, Category: "Petiscos" },
    { Image: Dog3, Category: "Guias" },
    { Image: Dog4, Category: "Higiene" },
  ];
  const OptionsList = [
    {
      title: "É agitado",
      id: 0,
    },
    {
      title: "Morde",
      id: 1,
    },
    {
      title: "Late Muito",
      id: 2,
    },
    { title: "É ansioso", id: 3 },
    { title: "É estressado", id: 4 },
  ];
  const MarcList=[
    Marc1,
    Marc2,
    Marc3,
    Marc1,
    Marc2,
    Marc3,
  ]
  const backgroundDog=[
    {
    url:backgroundDog1,
    text:'Parceiros',
    subtext:'Lorem ipsum dolor sit amet, consectetur',
    button:'Confira'
  },
  {
    url:backgroundDog2,
    text:' Assinatura Cãoselheiro',
    subtext:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.',
    button:'Saiba Mais'

  },
  ]
  const Blog=[
    Blog1,
    Blog2,
    Blog3,
    Blog4
  ]
  const Instagram=[
    Insta3,
      Insta1,
      Insta2,
      Insta3,
      Insta1,
      Insta2,
   
  ]

  return (
    <section className={styles.MainPage}>
      <Carousel button={'Confira'} className={'Carrousel'} text={"As melhores guias para os melhores passeios"} showArrows={true} images={BackgroundImage} />

      {/* Categorias */}
      <section className={styles.Section}>
        <h3>Categorias</h3>
        <CarouselCategory className={'Carrousel-Category'} infinite={true} itemDesktop={4} showArrows={true}>
          {CategoryList.map((item, index) => (
            <Card
              className={"Card-Category"}
              url={item.Image}
              title={item.Category}
              key={index}
            />
          ))}
        </CarouselCategory>
      </section>

      {/* Produtos */}
      <section className={styles.Section}>
        <div className={styles.TitleOptions}>
          <h3>Meu cachorro...</h3>
          <div className={styles.Options}>
            <AiOutlineLeft className={styles.IconLeft} onClick={()=>setOption(option-1)} />
            <Options options={OptionsList}  />
            <AiOutlineRight className={styles.IconRight}  onClick={()=>setOption(option+1)} />
          </div>
        </div>
        <CarouselProducts>
          {apiData.map((item,index)=>(
          <CardProduct onclick={()=>setOpenProduct(!openProduct)} props={item} key={index}></CardProduct>
          ))}
        </CarouselProducts>
        {
              openProduct&&(
                  <div className={styles.openProduct}>
                    <CardOpenProduct closeModal={()=>setOpenProduct(!openProduct)}></CardOpenProduct>
                  </div>
              )                
            }
        <div className={styles.DotArea}>
          <p>Ver todos</p>
          <Dot props={5}></Dot>
        </div>
      </section>

      {/* Marcas */}
      <section className={styles.Section}>
      <div className={styles.TitleOptions}>
          <h3>Principais marcas</h3>
          <div className={styles.Options}>
          <p>Ver todos</p>
          </div>
      </div>
          <CarouselCategory className={'Carrousel-Marc'} itemDesktop={6}>
            {
              MarcList.map((item,index)=>(
                <Card  url={item} key={index} className={"Card-Marc Card-"+index}/>
              ))
            }
          </CarouselCategory>
      </section>

      {/* Ads */}
      <section className={styles.Section}>
        <div className={styles.CarouselGroup}>
        {
          backgroundDog.map((item,index)=>(
            <Carousel key={index} button={item.button} className={'Carousel-Card-'+index} text={item.text} subtext={item.subtext} showArrows={false} images={item.url}></Carousel>
          ))
        }
        
        </div>
        <div className={styles.DotDogGroup}>
          <Dot props={3} active={0}></Dot>
        </div>
      </section>
        {/* Blog */}
      <section className={styles.Section}>
          <h3>Confira o nosso blog</h3>
          <CarouselCategory className={'Carrousel-Category'} itemDesktop={4} infinite={true} showArrows={true}>
          {
            Blog.map((item,index)=>(
              <CardBlog url={item} key={index}></CardBlog>
            ))
          }
        </CarouselCategory>
        <div className={styles.DotArea}>
          <Dot props={3} active={0}></Dot>
        </div>
      </section>

      {/* Instagram */}

      <section className={styles.Section}>
      <div className={styles.TitleOptions}>
          <h3>Instagram</h3>
          <div className={styles.Options}>
          <p>+Seguir</p>
          </div>
      </div>
      <CarouselCategory className={'Carrousel-Instagram'} autoplay={true} itemDesktop={6} showArrows={false} infinite={true}>
          {
            Instagram.map((item,index)=>(
              <Card
              key={index}
              className={"Card-Instagram"}
              url={item}
            />
            ))
          }
      </CarouselCategory>
      </section>
      <section className={styles.FormArea}>
          <SigIn image={FormDog} ></SigIn>
      </section>
    </section>
  );
}
