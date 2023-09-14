import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import slide_image_1 from "./assets/images/img_1.jpg";
import slide_image_2 from "./assets/images/img_2.jpg";
import slide_image_3 from "./assets/images/img_3.jpg";
import slide_image_4 from "./assets/images/img_4.jpg";
import slide_image_5 from "./assets/images/img_5.jpg";
import slide_image_6 from "./assets/images/img_6.jpg";
import slide_image_7 from "./assets/images/img_7.jpg";
import CCard from "./components/CCard";
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use";

const data = [
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_1,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_2,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_3,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_4,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_5,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_1,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_2,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_3,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_4,
    class: 'D23_TH01',
    code: "DH52308976"
  },
  {
    name: "Nguyễn Phúc Trần Anh Thư",
    img: slide_image_5,
    class: 'D23_TH01',
    code: "DH52308976"
  },
]

function App() {
  const { width, height } = useWindowSize()
  return (
    <div className="">
      <div className="container ">
      <Confetti
        width={width}
        height={height}
      />
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {data.map((item, index)=>(
             <SwiperSlide key={index}>
             <CCard data={item}/>
             </SwiperSlide>
          ))}
          

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </Swiper>
       
      </div>
    </div>
  );
}

export default App;
