import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'

// components
import Spinner from '../../UI/Spinner/Spinner'

//photos images svg
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Location } from '../../assets/location.svg'



const Contact = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [mapIsReady, setMapIsReady] = useState(false)


    return (
        <main className={style.background}>

            <header className={style.section}>
                <div className={style.head}>
                    <p className="text1">KONTAKT</p>
                    <h1 className="text2">Skontaktuj się z nami</h1>
                    <div className="line"></div>
                </div>
                <div className={style.contact}>

                    {/* contact links  */}
                    <section className={style.content}>
                        <a className={style.contentItem} href={`http://maps.google.com/?q=Gdynia Wieluńska 38`} target='blank' >
                            <p className={style.contentIcon}><Location /></p>
                            <p className={style.contentDesc}>ul. Wieluńska 38, 81-502 Gdynia</p>
                        </a>
                        <a className={style.contentItem} href='tel:+48501388627'>
                            <p className={style.contentIcon}><Phone /></p>
                            <p className={style.contentDesc}>tel: +48 501-388-627</p>
                        </a>
                        <a className={style.contentItem} href='mailto:biuro@tatarczuk.com.pl?subject=Zapytanie'>
                            <p className={style.contentIcon}><Email /></p>
                            <p className={style.contentDesc}>e-mail: biuro@tatarczuk.com.pl</p>
                        </a>
                    </section>

                    {/* map */}
                    <section className={style.map}>
                        {!mapIsReady && <Spinner />}
                        <iframe title="mapa" onLoad={() => setMapIsReady(true)} className={style.mapItem} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.7359728060633!2d18.520530316009307!3d54.48524009649383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda0e9d6a4a177%3A0x6421db371cb9593e!2sTatarczuk%20Pawe%C5%82.%20Zak%C5%82ad%20Instalacyjny%20Wod-Kan%20CO%20i%20Gaz!5e0!3m2!1spl!2spl!4v1615846057971!5m2!1spl!2spl" loading="lazy" >
                        </iframe>
                    </section>

                </div>
            </header>

        </main>
    )
}


export default Contact

