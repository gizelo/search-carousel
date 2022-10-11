import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../styles/Carousel.module.css";
import Image from "next/image";

export default ({
  data,
  itemBg,
}: {
  data: { name: string; icon: string }[];
  itemBg: string;
}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      slideToClickedSlide
      autoplay={true}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.name}>
            <div className={styles.carouselItem}>
              <div
                className={styles.carouselItemImage}
                style={{ backgroundImage: `url(/icons/${itemBg})` }}
              >
                <Image src={`/icons/${item.icon}`} width={42} height={42} />
              </div>
              <span className={styles.carouselItemText}>{item.name}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
