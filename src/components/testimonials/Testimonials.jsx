import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data=[
{
  avatar:AVTR1,
  name:'Thamani Cereals',
  review: 'We tasked the developer with creating a point of sale system for us and we can comfortably say he delivered beyond our expectations.Not only is he commited to his work , he incorporates great creativity in his code to suite the customer'
},
{
  avatar:AVTR2,
  name:'Mary Poppins',
  review: 'sit amet consectetur adipisicing elit. Mollitia tempore est enim similique quaerat perferendis voluptatum sunt minima omnis, architecto itaque cupiditate et perspiciatis reprehenderit odio optio animi obcaecati recusandae.'
},
{
  avatar:AVTR3,
  name:'john doe',
  review: 'sit amet consectetur adipisicing elit. Mollitia tempore est enim similique quaerat perferendis voluptatum sunt minima omnis, architecto itaque cupiditate et perspiciatis reprehenderit odio optio animi obcaecati recusandae.'
},
{
  avatar:AVTR4,
  name:'jane doe',
  review:'sit amet consectetur adipisicing elit. Mollitia tempore est enim similique quaerat perferendis voluptatum sunt minima omnis, architecto itaque cupiditate et perspiciatis reprehenderit odio optio animi obcaecati recusandae.'
},
]


const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Reviews from clients</h5>
      <h2>testimonials</h2>
      <div className="container testimonials-container mySwiper"
      slidesPerView={1}
      Navigation
    
     
      >
        <div className="swiper-wrapper">

       {
        data.map(({avatar,name,review},index)=>{
          return(
            < article key={index} className="testimonial  swiper-slide">
            <div className="client-avatar">
              <img src={avatar} alt="Avatar one" />
              
            </div>
            <h5 className='client-name'>{name}</h5>
              <small className="client-review">
              {review}         

              </small>
 </article>
          )
        })
       }
               </div>

      </div>
      
    </section>)
}

export default Testimonials