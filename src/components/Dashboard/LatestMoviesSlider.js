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

export default function LatestMoviesSlider() {

    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='row' style={{
                                    backgroundImage: `url(https://picsum.photos/1920/1080?random=${item})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    aspectRatio: '5/3',
                                    borderRadius: '10px',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <div className={`col-12 ${Styles.movie_content}`}>
                                        <h1>Movie Title</h1>
                                        {/* Movie length */}
                                        <div className={Styles.movie_length}>
                                            <span>2h 30m</span>
                                        </div>
                                        {/* Play now button */}
                                        <div className={Styles.play_button}>
                                            <button>Play Now</button>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
