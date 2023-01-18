// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import  "./_slider.scss"
import "./../App/_button.scss";
// import required modules
import { Autoplay, EffectFade,  Pagination } from 'swiper';
const Slider = () => {
    return(
        <section className='hc__slider'>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="hs__slider--list"
            >
                <SwiperSlide className='hs__slider--item'>
                    <div className='hs__slider--content'>
                        <div className='hs__slider--title'>
                            Fiberglass and specialty metals are in stock across the United States
                            <br/>
                            Slider 1
                        </div>
                        <div className='hc__button__default hs__slider--button'>
                            Shop Now 1
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hs__slider--item'>
                    <div className='hs__slider--content'>
                        <div className='hs__slider--title'>
                            Fiberglass and specialty metals are in stock across the United States
                            <br/>
                            Slider 2

                        </div>
                        <div className='hc__button__default hs__slider--button'>
                            Shop Now 2
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hs__slider--item'>
                    <div className='hs__slider--content'>
                        <div className='hs__slider--title'>
                            Fiberglass and specialty metals are in stock across the United States
                            <br/>
                            Slider 3
                        </div>
                        <div className='hc__button__default hs__slider--button'>
                            Shop Now 3
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
export default  Slider;