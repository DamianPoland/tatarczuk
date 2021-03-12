import React from 'react'
import style from './About.module.css'

// photos
import logo from '../../assets/logo512.png'
import start from '../../assets/start.jpg'
import about from '../../assets/about.jpg'


const About = () => {
    return (

        <div className={style.background}>


            <section className={style.start}>
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
                <div className={style.whyContainer}>
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





        </div>
    )
}

export default About
