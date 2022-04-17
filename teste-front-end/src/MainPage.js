import styles from "./styles/MainPage.module.scss";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import Carrousel from "./components/carrousel/Carousel";
import CarrouselCategory from "./components/carrousel/CarouselCategory";
import CarouselProducts from "./components/carrousel/CarouselProducts";

import BackgroundImage from "../src/styles/img/background.png";

import Dog1 from "./styles/img/category/dog1.png";
import Dog2 from "./styles/img/category/dog2.png";
import Dog3 from "./styles/img/category/dog3.png";
import Dog4 from "./styles/img/category/dog4.png";

import Marc1 from './styles/img/marcs/buddy.png'
import Marc2 from './styles/img/marcs/kong.png'
import Marc3 from './styles/img/marcs/petgames.png'

import {Api} from "./components/api/Api";
import { useEffect, useState } from "react";
import { useOptions } from "./components/context/OptionsContext";

import Card from "./components/card/Card";
import Options from "./components/options/Options";
import Dot from "./components/dot/Dot";
import CardOpenProduct from "./components/modal/CardOpenProduct";
import CardProduct from "./components/card/CardProducts";



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

  return (
    <section className={styles.MainPage}>
      <Carrousel images={BackgroundImage} />

      {/* Categorias */}
      <div className={styles.Section}>
        <h3>Categorias</h3>
        <CarrouselCategory className={'Carrousel-Category'} itemDesktop={4} showArrows={true}>
          {CategoryList.map((item, index) => (
            <Card
              className={"Card-Category"}
              url={item.Image}
              title={item.Category}
              key={index}
            />
          ))}
        </CarrouselCategory>
      </div>

      {/* Produtos */}
      <div className={styles.Section}>
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
      </div>

      {/* Marcas */}
      <div className={styles.Section}>
      <div className={styles.TitleOptions}>
          <h3>Principais marcas</h3>
          <div className={styles.Options}>
          <p>Ver todos</p>
          </div>
      </div>
          <CarrouselCategory className={'Carrousel-Marc'} itemDesktop={6}>
            {
              MarcList.map((item,index)=>(
                <Card  url={item} key={index} className={"Card-Marc Card-"+index}/>
              ))
            }
          </CarrouselCategory>
      </div>
    </section>
  );
}
