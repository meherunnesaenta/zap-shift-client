import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
// import amazon_vector from '../../../assets/brands/amazon-vector.png'; // কমেন্ট করা রাখো যদি ফাইল না থাকে
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
// import start_people from '../../../assets/brands/star-people.png';

export const Brands = () => {
  return (
    <div className="brands-container py-10 bg-gray-50">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={2}          // ← এটা খুব জরুরি লুপিং-এর জন্য
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        loop={true}                     // লুপ চালু
        loopAdditionalSlides={2}        // ← এটা যোগ করো (লুপিং স্মুথ করতে)
        loopedSlides={null}             // null রাখো
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,     // হোভারে পজ না করুক (চাইলে true করো)
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={amazon} alt="Amazon" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="Casio" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={amazon_vector} alt="Amazon Vector" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={moonstar} alt="Moonstar" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="Randstad" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="Star" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={start_people} alt="Star People" className="h-20 md:h-24 w-auto mx-auto object-contain" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};