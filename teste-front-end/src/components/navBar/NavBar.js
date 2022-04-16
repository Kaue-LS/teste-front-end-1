import styles from '../../styles/NavBar.module.scss';

import {RiTruckLine} from 'react-icons/ri'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {MdSecurity} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'
import {CgCrown} from 'react-icons/cg'
import {BsBoxSeam} from 'react-icons/bs'

import Logo from '../../styles/img/icons/logo.png'
// import Box from '../../styles/icons/box.png'
export default function NavBar() {
  return (
    <header className={styles.NavBar}>
      <section className={styles.Header}>
        <div className={styles.Line}>
        <MdSecurity className={styles.Icon}/>
          <p>
            Compra <span className={styles.Destaque}>100% segura</span>
          </p>
        </div>
        <div className={styles.Line}>
            <RiTruckLine className={styles.Icon}/>
          <p>
            <span className={styles.Destaque}>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className={styles.Line}>
            <AiOutlineCreditCard className={styles.Icon}/>
          <p>
            <span className={styles.Destaque}>Parcele</span> suas compras
          </p>
        </div>
      </section>

      <section className={styles.Middle}>
        <img src={Logo} alt='Logo' className={styles.Logo}/>
        <div className={styles.SearchBar}>
            <input type={'text'} placeholder='O que você está buscando?'/>
            <BsSearch className={styles.IconSearch}/>
        </div>
        <div className={styles.Icons}>
        <BsBoxSeam className={styles.IconBox}/>
        <AiOutlineHeart className={styles.IconHeart}/>
        <BiUserCircle className={styles.IconUser}/>
        <BsCart3 className={styles.IconCart}/>
        </div>
      </section>

      <section className={styles.Footer}>
          <p>Brincar</p>
          <p>Morder</p>
          <p>Comer</p>
          <p>Passear</p>
          <p>Casa e conforto</p>
          <p>Educação</p>
          <p>Ofertas</p>
        <div>
            <CgCrown className={styles.IconCrown}/>
            <p>Coleção de Outono</p>
        </div>
      </section>
    </header>
  );
}
