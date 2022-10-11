import React, { Dispatch } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

import styles from "../styles/Carousel.module.css";
import Image from "next/image";

SwiperCore.use([Autoplay]);

export default ({
  data,
  itemBg,
  setCurrentSlide,
  reverseDirection,
}: {
  data: { name: string; icon: string }[];
  itemBg: string;
  setCurrentSlide: Dispatch<any>;
  reverseDirection?: boolean;
}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      slideToClickedSlide
      autoplay={{ delay: 1000, reverseDirection }}
      onSwiper={setCurrentSlide}
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
