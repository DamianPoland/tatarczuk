import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'

// images offer
import logo from '../../assets/logo512.png'
import start from '../../assets/start.jpg'
import startSmall from '../../assets/startSmall.jpg'
import about from '../../assets/about.jpg'

import kociol1 from '../../assets/offer/kociol1.png'
import kociol2 from '../../assets/offer/kociol2.jpg'
import kociol4 from '../../assets/offer/kociol4.jpg'
import pompa1 from '../../assets/offer/pompa1.png'
import pompa2 from '../../assets/offer/pompa2.png'
import pompa3 from '../../assets/offer/pompa3.png'
import pakiet1 from '../../assets/offer/pakiet1.jpg'
import pakiet2 from '../../assets/offer/pakiet2.jpg'
import PompCWO1 from '../../assets/offer/PompCWO1.png'
import PompCWO2 from '../../assets/offer/PompCWO2.png'

// images realizations
import cwu1 from '../../assets/realizations/cwu1.jpeg'
import cwu4 from '../../assets/realizations/cwu4.jpeg'
import co1 from '../../assets/realizations/co1.jpeg'
import co2 from '../../assets/realizations/co2.jpeg'

//svg
import { ReactComponent as Phone } from '../../assets/phone.svg'



const Home = () => {
    return (

        <div className={style.background}>


            <section className={style.start}>
                <figure className={style.start__figureSmall}>
                    <img className="img" src={startSmall} alt="startSmall" />
                </figure>
                <figure className={style.start__figure}>
                    <img className="img" src={start} alt="start" />
                </figure>
                <div className={style.start__blackFilter}></div>
                <div className={style.start__descContainer}>
                    <div className={style.start__text1Container}>
                        <img className={style.start__imgLogo} src={logo} alt="logo" />
                        <p className={style.start__text1}>Nasze instalacje</p>
                    </div>
                    <p className={style.start__text2}>Twój KOMFORT</p>
                </div>
            </section>



            <section className={style.about}>
                <figure className={style.about__figure}>
                    <img className="img" src={about} alt="about" />
                </figure>
                <div className={style.about__descContainer}>
                    <p className="text1">O NAS</p>
                    <p className="text2">Dowiedz się kim jesteśmy</p>
                    <div className="line"></div>
                    <h1 className="text3">Zakład Instalacyjny Wod-Kan. CO i Gaz Paweł Tatarczuk jest rodzinną firmą, założoną w 1937 roku. Działamy nieprzerwanie pod tym samym adresem, zdobywając zaufanie rzeszy Klientów. Dzięki ogromnemu doświadczeniu i wiedzy przekazywanej "z ojca na syna" możemy podjąć się każdego wyzwania. Ciągle się rozwijamy poszerzając naszą ofertę i wychodząc naprzeciw oczekiwaniom naszych Klientów.</h1>
                </div>
            </section>


            <section className={style.why}>
                <div className={style.why__container}>
                    <div className={style.why__descContainer}>
                        <div className={style.why__blackFilter}></div>
                        <p className="text1">DLACZEGO MY</p>
                        <p className="text2 text2white">Zobacz co nas wyróżnia</p>
                        <div className="line"></div>
                        <div className={style.why__reasonContainer}>
                            <p className={style.why__reasonNumber}>.01</p>
                            <p className="text3 text3white">Firma działa nieprzerwanie pod tym samym adresem od ponad 80 lat. Wykonaliśmy już setki projektów i jesteśmy znani w branży z solidności. </p>
                        </div>
                        <div className={style.why__reasonContainer}>
                            <p className={style.why__reasonNumber}>.02</p>
                            <p className="text3 text3white">Posiadamy szeroki wachlarz usług oraz produktów. Blisko współpracujemy z marką Ariston znaną na całym świecie.</p>
                        </div>
                        <div className={style.why__reasonContainer}>
                            <p className={style.why__reasonNumber}>.03</p>
                            <p className="text3 text3white">Dzięki ciągłemu rozwojowi oraz szkoleniom jesteśmy w stanie wykonać każdy projekt. Posiadamy certyfikaty niezbędne do wykonania instalacji hydraulicznych i gazowych oraz serwisowania kotłów marki Ariston. </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className={style.offer}>
                <div className={style.offer__container}>

                    <div className={style.offer__containerImgsTop}>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={kociol1} alt="kociol1" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={pompa3} alt="pompa3" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={PompCWO1} alt="PompCWO1" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={pompa2} alt="pompa2" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={kociol4} alt="kociol4" />
                        </figure>
                    </div>

                    <div className={style.offer__containerDesc}>
                        <p className="text1">OFERTA</p>
                        <p className="text2">Posiadamy szeroki asortyment produktów</p>
                        <div className="line"></div>
                        <h1 className="text3">Wykonujemy: montaż kotłów gazowych i pomp ciepła, nowoczesne instalacje centralnego ogrzewania, instalacje wodociągowe i kanalizacyjne, instalacje gazowe, instalacje solarne i inne</h1>
                    </div>

                    <div className={style.offer__containerImgsBottom}>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={pakiet1} alt="pakiet1" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={kociol2} alt="kociol2" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={PompCWO2} alt="PompCWO2" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={pakiet2} alt="pakiet2" />
                        </figure>
                        <figure className={style.offer__figure}>
                            <img className={style.offer__img} src={pompa1} alt="pompa1" />
                        </figure>

                    </div>
                    <div className={style.btnContainer}>
                        <Link to="/offer" className={style.btn}>Zobacz naszą pełną ofertę <i className={style.rightArrow}></i></Link>
                    </div>
                </div>
            </section>


            <section className={style.realizations}>
                <div className={style.realizations__container}>
                    <div className={style.realizations__descContainer}>
                        <p className="text1">REALIZACJE</p>
                        <p className="text2 text2white">Nasze ostatnie realizacje</p>
                        <div className="line"></div>
                    </div>
                    <div className={style.realizations__imgsContainer}>
                        <figure className={style.realizations__figure}>
                            <img className={style.realizations__img} src={cwu1} alt="cwu1" />
                        </figure>
                        <figure className={style.realizations__figure}>
                            <img className={style.realizations__img} src={cwu4} alt="cwu4" />
                        </figure>
                        <figure className={style.realizations__figure}>
                            <img className={style.realizations__img} src={co1} alt="co1" />
                        </figure>
                        <figure className={style.realizations__figure}>
                            <img className={style.realizations__img} src={co2} alt="co2" />
                        </figure>
                    </div>
                    <div className={style.realizations__btnContainer}>
                        <div className={style.btnContainer}>
                            <Link to="/realizations" className={style.btn}>Zobacz nasze realizacje <i className={style.rightArrow}></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.contact}>
                <p className="text1">KONTAKT</p>
                <p className="text2">Zamów bezpłatną wycenę</p>
                <div className="line"></div>
                <h1 className={style.contact__tel}><a href='tel:+48501388627' className={style.contact__telIcon}><Phone /></a>+48 501-388-627</h1>
                <div className={style.btnContainer}>
                    <Link to="/contact" className={style.btn}>Sprawdź inne formy kontaktu <i className={style.rightArrow}></i></Link>
                </div>
            </section>

            <section className={style.footer}><div className={style.footer__whiteSpace}></div></section>

        </div>
    )
}

export default Home
