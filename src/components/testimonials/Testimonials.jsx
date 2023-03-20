import React from "react";
import "./testimonials.css";
import ava1 from "../../assets/white.png";
import ava2 from "../../assets/white.png";
import ava3 from "../../assets/white.png";
import ava4 from "../../assets/white.png";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: ava1,
    name: "Amit Mishra",
    review:
      "Mustafa is no ordinary 20 year old. In one summer, he taught himself to code and got a job. He is passionate to learn and study new technology with the mind set of never to stop and keep strieving unless and untill he achivied his goal!!",
  },
  {
    avatar: ava2,
    name: "David Roger",
    review:
      "Mustafa is no ordinary 20 year old. In one summer, he taught himself to code and got a job. He is passionate to learn and study new technology with the mind set of never to stop and keep strieving unless and untill he achivied his goal!!",
  },
  {
    avatar: ava3,
    name: "David Roger",
    review:
      "Mustafa is no ordinary 20 year old. In one summer, he taught himself to code and got a job. He is passionate to learn and study new technology with the mind set of never to stop and keep strieving unless and untill he achivied his goal!!",
  },
  {
    avatar: ava4,
    name: "David Roger",
    review:
      "Mustafa is no ordinary 20 year old. In one summer, he taught himself to code and got a job. He is passionate to learn and study new technology with the mind set of never to stop and keep strieving unless and untill he achivied his goal!!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Blogs</h2>

      <Swiper className="container testimonials__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key="index" className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name"><strong>{name}</strong></h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;