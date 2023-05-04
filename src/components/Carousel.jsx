import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles:
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import swiper required modules:
import { EffectCoverflow } from "swiper";
import LazyLoad from "react-lazyload";

const Carousel = () => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cocinero-server-soloman-err.vercel.app/featured"
        );
        const data = await res.json();
        setFeaturedData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 my-20"
    >
      {featuredData.map((featured) => (
        <SwiperSlide key={featured.id} className="relative">
          <h1 className="absolute top-0 p-2 md:p-5 font-bold text-2xl md:text-3xl">
            {featured.title}
          </h1>
          <LazyLoad height={500}>
            <img className="rounded-xl" src={featured.image} alt="" />
          </LazyLoad>
          <p className="absolute bottom-0 font-bold px-2 md:px-3 py-2 bg-slate-800 opacity-90">
            {featured.desc.slice(0, 50)}..
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
