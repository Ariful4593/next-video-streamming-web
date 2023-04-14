import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "./LatestMovies.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { MovieThumbnailSm } from "@/ui/MovieThumbnailSm/MovieThumbnailSm";
import { useResponsiveWidth } from "@/hooks/useResponsiveWidth";

export default function LatestMoviesSlider() {
    const preview = useResponsiveWidth();
    return (
        <>
            <Swiper
                slidesPerView={preview}
                // centeredSlides={true}
                spaceBetween={50}
                // pagination={{
                //     type: "fraction",
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <MovieThumbnailSm url={`https://picsum.photos/1920/1080?random=${item}`} video_id={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
