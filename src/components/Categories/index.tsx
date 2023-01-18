import React, {useState} from "react";
import data from "../../data";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./style.scss";
import "./../App/_button.scss";

// import required modules
import {Navigation} from "swiper";

const Categories = () => {
  const [catitem] = useState(data);

  const slideitem = catitem.map((item) => {
    return (
      <SwiperSlide className='hc__categories--item'>
        <picture className='hc__categories--pic'>
          <img alt='Abrasives' className='hc__categories--img' src={`img/categories/${item.img}`} />
        </picture>
        <div className='hc__categories--name'>{item.name}</div>
      </SwiperSlide>
    );
  });

  return (
    <section className='hc__categories'>
      <div className='hc__categories--box'>
        <div className='hc__categories--top'>
          <div className='hc__categories--top-left'>
            <div className='hc__categories--title'>Categories</div>
            <div className='hc__categories--controle'>
              <div className='hc__categories--controle-prev'>
                <div className='hc-icon--control hc-icon--control-dims' />
              </div>
              <div className='hc__categories--controle-next'>
                <div className='hc-icon--control hc-icon--control-dims' />
              </div>
            </div>
          </div>
          <div className='hc__categories--top-right'>
            <div className='hc__button__default hc__categories--button'>
              Live Chat <div className='hc-icon--livechat hc-icon--livechat-dims' />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".hc__categories--controle-prev",
            nextEl: ".hc__categories--controle-next",
          }}
          className='hc__categories--list'
        >
          {slideitem}
        </Swiper>
      </div>
    </section>
  );
};
export default Categories;
