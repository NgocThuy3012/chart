import CHeader from "../CHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import img1 from "../../../../assets/images/img.jpeg";
import img2 from "../../../../assets/images/img1.jpeg";
import img3 from "../../../../assets/images/img2.jpeg";
import img4 from "../../../../assets/images/img3.jpeg";
import img5 from "../../../../assets/images/img4.jpeg";

const CMainLayout = () => {
  return (
    <div className=" bg-slate-500">
      <CHeader />
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        className="mySwiper swiper_container"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CMainLayout;
