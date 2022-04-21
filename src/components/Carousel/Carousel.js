import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Carousel/Carousel.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://roonlabs.com/wp-content/uploads/nucleus-built_for_sound_quality.jpg' alt='Sound Quality'/></SwiperSlide>
        <SwiperSlide><img src='https://brightshub.com/wp-content/uploads/2021/12/Audio-Visual-Equipment-Hire-1200x600.jpg' alt='Hire' /></SwiperSlide>
        <SwiperSlide><img src='https://musiciansunion.org.uk/MusiciansUnion/media/content/hero/The-room-for-recording-sound_rv_1536w.jpg' alt='Recording Sound'/></SwiperSlide>
        <SwiperSlide><img src='https://cdn-www.avid.com/-/media/avid/images/products/avid-nexis/2021-updates/47-02_monkeyland-1200x600.jpg?h=600&iar=0&w=1200&hash=94FA9EBAD3B2AE26ED7E61421BBF500E' alt='avid'/></SwiperSlide>
        <SwiperSlide><img src='https://www.addictivetips.com/app/uploads/2020/04/headphones-win-10.jpg' alt='headphone'/></SwiperSlide>
      </Swiper>
    );
  };

export default Carousel;