import React from 'react'
import style from './Offer.module.css'

// photos
import banerPompaCiepla from '../../assets/offer/banerPompaCiepla.jpg'
import montazKotlow from '../../assets/offer/montazKotlow.jpeg'
import banerNowoczesne from '../../assets/offer/banerNowoczesne.jpg'
import serwis from '../../assets/offer/serwis.jpg'
import wodkan from '../../assets/offer/wodkan.jpg'
import gaz from '../../assets/offer/gaz.jpg'
import solar from '../../assets/offer/solar.jpg'
import uszczelnianie from '../../assets/offer/uszczelnianie.jpg'



const offer = [
    { img: banerPompaCiepla, text: "Pompy ciepła.", number: ".01" },
    { img: montazKotlow, text: "Montaż kotłów gazowych.", number: ".02" },
    { img: banerNowoczesne, text: "Nowoczesne instalacje centralnego ogrzewania.", number: ".03" },
    { img: serwis, text: "Serwis kotłów gazowych Ariston i Chaffoteaux&Maury", number: ".04" },
    { img: wodkan, text: "Instalacje wodociągowe i kanalizacyjne.", number: ".05" },
    { img: gaz, text: "Instalacje gazowe.", number: ".06" },
    { img: solar, text: "Instalacje solarne.", number: ".07" },
    { img: uszczelnianie, text: "Bezinwayjne uszczelnianie instalacji co.", number: ".08" },
]


const Offer = () => {


    return (

        <main className={style.background}>
            <div className={style.section}>

                <div className={style.head}>
                    <p className="text1">OFERTA</p>
                    <h1 className="text2">Skorzystaj z naszej oferty</h1>
                    <div className="line"></div>
                </div>
                <section className={style.offer__container}>

                    {offer.map((item, id) => {
                        return (
                            <div key={item.text} style={id % 2 === 0 ? { alignItems: "flex-start" } : { alignItems: "flex-end" }} className={style.offer__item}>
                                <figure style={id % 2 === 0 ? { padding: "0 0 0 4rem" } : { padding: "0 4rem 0 0" }} className={style.offer__itemFigure}>
                                    <img className={style.offer__itemImg} src={item.img} alt={`${item.img}`} />
                                </figure>
                                <div className={style.offer__itemTextContainer}>
                                    <p className={style.offer__itemNumber}>{item.number}</p>
                                    <h1 className={style.offer__itemText}>{item.text}</h1>
                                    <div className="line"></div>
                                </div>
                            </div>
                        )
                    })}

                </section>

            </div>
        </main>
    )
}

export default Offer
