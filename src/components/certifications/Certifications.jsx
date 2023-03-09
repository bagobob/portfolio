import React from 'react';
import "./certifications.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Certifications = () => {
  return (
    <section className="testimonial container section" id="certifications">
        <h2 className="section__title">Certifications</h2>
        <span className="section__subtitle">My achievements</span>

        <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        className="certification__container">
            {Data.map(({id, image, title, description, link }) => {
                return (
                    <SwiperSlide className="certification__card" key={id}>
                        <img src={image} alt="" className="certification__img" />

                        <h3 className="certification__name">{title}</h3>
                        <p className="certification__description">{description}</p>
                        <a className="work__button" href={link} target="_blank" rel='noreferrer'>
            See it<i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Certifications;