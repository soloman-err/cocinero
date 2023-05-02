import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles:
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import swiper required modules:
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = () => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://cocinero-server-soloman-err.vercel.app/featured"
      );
      const data = await res.json();
      setFeaturedData(data);
    };
    fetchData();
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      pagination={true}
    >
      {featuredData.map((featured) => (
        <SwiperSlide key={featured.id} className="relative">
          <h1 className="absolute top-0 p-2 md:p-5 font-bold md:text-2xl">
            {featured.title}
          </h1>
          <img className="rounded-xl" src={featured.image} alt="" />
          <p className="absolute bottom-0 p-2 md:p-5">
            {featured.desc.slice(0, 100)}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
