import React, { useState, useEffect } from 'react'
import style from './Realizations.module.css'

// aos
import AOS from 'aos'

// components
import TouchSlider from "../../UI/TouchSlider/TouchSlider"

//svg
import { ReactComponent as Close } from '../../assets/close.svg'

// images realizations
import co1 from '../../assets/realizations/co1.jpeg'
import co2 from '../../assets/realizations/co2.jpeg'
import co3 from '../../assets/realizations/co3.jpeg'
import co4 from '../../assets/realizations/co4.jpeg'
import co5 from '../../assets/realizations/co5.jpeg'
import co6 from '../../assets/realizations/co6.jpeg'
import co7 from '../../assets/realizations/co7.jpeg'

import cwu1 from '../../assets/realizations/cwu1.jpeg'
import cwu2 from '../../assets/realizations/cwu2.jpeg'
import cwu3 from '../../assets/realizations/cwu3.jpeg'
import cwu4 from '../../assets/realizations/cwu4.jpeg'
import cwu5 from '../../assets/realizations/cwu5.jpeg'
import cwu6 from '../../assets/realizations/cwu6.jpeg'
import cwu7 from '../../assets/realizations/cwu7.jpeg'
// import cwu8 from '../../assets/realizations/cwu8.jpeg'
import cwu9 from '../../assets/realizations/cwu9.jpeg'
import cwu10 from '../../assets/realizations/cwu10.jpeg'
// import cwu11 from '../../assets/realizations/cwu11.jpeg'
// import cwu12 from '../../assets/realizations/cwu12.jpeg'
import cwu13 from '../../assets/realizations/cwu13.jpeg'
import cwu14 from '../../assets/realizations/cwu14.jpeg'
import cwu15 from '../../assets/realizations/cwu15.jpeg'
import cwu16 from '../../assets/realizations/cwu16.jpeg'
import cwu17 from '../../assets/realizations/cwu17.jpeg'
import cwu18 from '../../assets/realizations/cwu18.jpeg'
import cwu19 from '../../assets/realizations/cwu19.jpeg'
import cwu20 from '../../assets/realizations/cwu20.jpeg'

const realizations = [
    { img: co1 },
    { img: co2 },
    { img: co3 },
    { img: co4 },
    { img: co5 },
    { img: co6 },
    { img: co7 },
    { img: cwu1 },
    { img: cwu2 },
    { img: cwu3 },
    { img: cwu4 },
    { img: cwu5 },
    { img: cwu6 },
    { img: cwu7 },
    // { img: cwu8 },
    { img: cwu9 },
    { img: cwu10 },
    // { img: cwu11 },
    // { img: cwu12 },
    { img: cwu13 },
    { img: cwu14 },
    { img: cwu15 },
    { img: cwu16 },
    { img: cwu17 },
    { img: cwu18 },
    { img: cwu19 },
    { img: cwu20 },
]

const Realizations = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // swiper
    const [isSwiperVisible, setIsSwiperVisible] = useState(false)

    // AOS reload after load first photo to not show animation elements before load screen
    const [isLoadStart, setIsLoadStart] = useState(false)
    useEffect(() => { AOS.refresh() }, [isLoadStart])

    return (

        <div className={style.background}>
            {isSwiperVisible &&
                <section className={style.slider__background}>
                    <div onClick={() => setIsSwiperVisible(false)} className={style.slider__close}>
                        <Close />
                    </div>
                    <TouchSlider itemsArray={realizations} initialSlide={isSwiperVisible - 1} />
                </section>}

            <main className={style.section}>

                <header className={style.head}>
                    <h2 className="text1">REALIZACJE</h2>
                    <h1 className="text2">Obejrzyj nasze realizacje</h1>
                    <div className="line"></div>
                </header>

                <section className={style.realizations__container}>
                    {realizations.map((item, id) => {
                        return (
                            <figure onClick={() => setIsSwiperVisible(id + 1)} key={id} className={style.realizations__itemFigure}>
                                <img onLoad={() => realizations.length === (id + 1) && setIsLoadStart(true)} data-aos="zoom-in" className={style.realizations__itemImg} src={item.img} alt={`${item.img}`} />
                            </figure>
                        )
                    })}
                </section>

            </main>
        </div>
    )
}

export default Realizations
