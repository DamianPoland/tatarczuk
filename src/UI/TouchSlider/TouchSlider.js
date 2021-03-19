import React from 'react'
import './TouchSlider.css' // change classes eg pagination color



// Swiper
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination, EffectCube, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper modules
import 'swiper/components/navigation/navigation.scss'// navigations => arrows
import 'swiper/components/pagination/pagination.scss'// paginations => bottom dots
import 'swiper/components/effect-coverflow/effect-coverflow.scss'// effect coverflow
import 'swiper/components/effect-cube/effect-cube.scss'// effect cube



// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow, EffectCube]);


/* Description:
1. npm i swiper
2. npm install node-sass => must reload localhost - npm start in console
3. import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/swiper.scss';
4. in props push itemsArray with all slides
5. break point is in 800px. Slider has no responsiwnes height (only width). To set responsivnes in height change in slider__wrapperMy max-width according to height (depends of aspect ratio img)
*/

const TouchSlider = props => {
    return (
        <div className="slider__wrapperMy">
            <Swiper
                // speed={1000} //autoplay
                // autoplay={{ delay: 1000 }} //autoplay
                autoHeight={true}
                initialSlide={window.innerWidth > 800 ? props.initialSlide - 1 : props.initialSlide}
                style={{ padding: "4rem 0" }}
                effect="coverflow" // cube or coverflow
                spaceBetween={50} // margin
                slidesPerView={window.innerWidth > 800 ? 3 : 1} // how many slides visible => according to with (pnone => 1 and PC => 3)
                loop={true}
                navigation
                pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {props.itemsArray.map((item, index) =>

                    // slider item
                    <SwiperSlide key={index} onClick={() => console.log("click: ", item)}>
                        <div className="swiper-slider-ontainer-custom">
                            <img className="img" src={item.img} alt={`${item}`} />
                        </div>
                    </SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export default TouchSlider
