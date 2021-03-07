import React, { useEffect } from 'react'
import style from './Contact.module.css'

//photos images svg
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as ContactUs } from '../../assets/contact_us.svg'





const Contact = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className={style.background}>

            <div className={style.section}>
                <div className={style.head}>
                    <h1 className={style.header}>Skontaktuj się</h1>
                    <p className={style.line}></p>
                </div>
                <div className={style.contact}>

                    {/* contact links  */}
                    <div className={style.content}>
                        <a className={style.contentItem} href={`http://maps.google.com/?q=Gdynia Wieluńska 38`} target='blank' >
                            <p className={style.contentIcon}><Location /></p>
                            <p className={style.contentDesc}>Wieluńska 38, 81-502 Gdynia</p>
                        </a>
                        <a className={style.contentItem} href='tel:+48501388627'>
                            <p className={style.contentIcon}><Phone /></p>
                            <p className={style.contentDesc}>+48 501-388-627</p>
                        </a>
                        <a className={style.contentItem} href='mailto:tatarczuk.serwis@poczta.fm?subject=Zapytanie'>
                            <p className={style.contentIcon}><Email /></p>
                            <p className={style.contentDesc}>tatarczuk.serwis@poczta.fm</p>
                        </a>
                    </div>

                    {/* form */}
                    <div className={style.formContainerMain}>
                        <div className={style.contactUs}>
                            <ContactUs />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}


export default Contact

