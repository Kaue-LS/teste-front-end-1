import styles from '../../styles/Footer.module.scss'

import {BsInstagram} from 'react-icons/bs'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {BsYoutube} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'

import AmericaExpress from '../../styles/img/icons/pay-americaexpress.png'
import CodeBar from '../../styles/img/icons/pay-codebar.png'
import DinnerClub from '../../styles/img/icons/pay-dinnerclub.png'
import Elo from '../../styles/img/icons/pay-elo.png'
import Mastercard from '../../styles/img/icons/pay-mastercard.png'
import Visa from '../../styles/img/icons/pay-visa.png'
import LetsEncrypt from '../../styles/img/icons/letsencrypt.png'
import Vtex from '../../styles/img/icons/vtex.png'
export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <section className={styles.About}>
        <h3>Nos siga nas nossas redes sociais</h3>
       
        <div>
            <RiFacebookBoxFill className={styles.Icon}/>
            <BsInstagram className={styles.Icon}/>
            <BsYoutube className={styles.Icon}/>
        </div>
        <h3>Sobre o Cãoselheiro</h3>
        <article>
          Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma
          empresa que nasceu para contribuir para uma melhor qualidade de vida
          dos cães e seus familiares humanos. Seus sócios são profissionais de
          educação canina que trabalham seguindo metodologias positivas de
          treinamento animal, encorajando e recompensando os acertos de nossos
          amigos em seus processos de adestramento. Aqui você encontrará apenas
          itens de qualidade comprovada e utilizados pessoalmente por seus
          idealizadores. Fique à vontade!
        </article>
      </section>
      <section className={styles.Info}>
            <div className={styles.ContactPayment}>
            <div className={styles.Contact}>
                <div>
                    <h3>Assinatura</h3>
                    <h3>Parceiros</h3>
                </div>
                <div>
                    <h3>Institucional</h3>
                    <p>Quem somos</p>
                    <p>Política de privacidade</p>
                    <p>Política comercial</p>
                    <p>Política de devolução</p>
                    <p>Regras de frete</p>
                </div>
                <div>
                    <h3>Atendimento</h3>
                    <p>Fale conosco</p>
                    <div>
                    <BsTelephone/>
                    <a href='https://wa.me/5511972121214'>(11) 97212-1314</a>
                    </div>
                    <a href="mailto: ocaoselheiro@ocaoselheiro.com.br">ocaoselheiro@ocaoselheiro.com.br</a>
                    <p>Trabalhe conosco</p>
                </div>
            </div>
            <div className={styles.Payment}>
                <div  className={styles.IconsPay}>
                    <h3>Formas de Pagamento</h3>
                    <div>
                        <div>
                        <img src={Elo} alt=''/>
                        </div>
                        <div>
                        <img src={Visa} alt=''/>
                        </div>
                        <div>
                        <img src={Mastercard} alt=''/>
                        </div>
                        <div>
                        <img src={CodeBar} alt=''/>
                        </div>
                        <div>
                        <img src={DinnerClub} alt=''/>
                        </div>
                        <div>
                        <img src={AmericaExpress} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={styles.Security}>
                    <h3>Segurança</h3>
                    <img src={LetsEncrypt} alt=''/>
                </div>
            </div>
            </div>
            <div className={styles.Copyrigth}>
                    <pre>
                        O Cãoselheiro Comércio LTDA<br/>
                        CNPJ: 30.324.633/0001-16<br/>
                        © Todos os direitos reservados. 2021    
                    </pre>
            
                <div>
                    <h3><span>ec</span>onverse</h3>
                    <div>
                        <img src={Vtex} alt=''/>
                        <h3>vtex</h3>
                    </div>
                </div>
            </div>
      </section>
    </footer>
  );
}
