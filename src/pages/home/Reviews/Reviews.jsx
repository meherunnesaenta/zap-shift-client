import React, { use } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewsCard } from './ReviewsCard';


export const Reviews = ({reviews}) => {
    const reviewsData = use(reviews);
    console.log(reviewsData);
  return (
    <div>
        <h2 className='text-3xl font-bold text-center mb-6'>Reviews</h2>
        <p className='text-center mb-8'>What Our Customers Say</p>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay  ]}
        className="mySwiper"
      >

          {
            reviewsData.map(review => <SwiperSlide key={review._id}>
                <ReviewsCard review={review}></ReviewsCard>
            </SwiperSlide>)
          }
      </Swiper>

    </div>
  )
}
