import React from 'react'
import style from './Offer.module.css'

// photos
import solar from '../../assets/offer/solar.jpg'






const offer = [
    { img: solar, text: "Pompy ciepła.", number: ".01" },
    { img: solar, text: "Montaż kotłów gazowych.", number: ".02" },
    { img: solar, text: "Serwis kotłów gazowych Ariston i Chaffoteaux&Maury", number: ".03" },
    { img: solar, text: "Nowoczesne instalacje centralnego ogrzewania.", number: ".04" },
    { img: solar, text: "Instalacje wodociągowe i kanalizacyjne.", number: ".05" },
    { img: solar, text: "Instalacje gazowe.", number: ".06" },
    { img: solar, text: "Instalacje solarne.", number: ".07" },
    { img: solar, text: "Bezinwayjne uszczelnianie instalacji co.", number: ".08" },
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
                                <div className={style.offer__itemTextContainer}>
                                    <p className={style.offer__itemNumber}>{item.number}</p>
                                    <h1 className={style.offer__itemText}>{item.text}</h1>
                                    <div className="line"></div>
                                </div>
                                <figure style={id % 2 === 0 ? { padding: "0 0 0 4rem" } : { padding: "0 4rem 0 0" }} className={style.offer__itemFigure}>
                                    <img className={style.offer__itemImg} src={item.img} alt={`${item.img}`} />
                                </figure>
                            </div>
                        )
                    })}

                </section>

            </div>
        </main>
    )
}

export default Offer
