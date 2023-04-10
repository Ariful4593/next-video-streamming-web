import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Styles from './SwipperSlide.module.css'
export const BannerSlide = () => {
    return (
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className='row'  style={{
                            backgroundImage: `url(https://picsum.photos/1920/1080?random=${item})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            aspectRatio: '5/2',
                            borderRadius: '10px',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className={`col-6 ${Styles.banner_content}`}>
                                <h1>Movie Title</h1>
                                {/* Ratings */}
                                <div className={Styles.ratings}>
                                    <div className={Styles.rating}>
                                        <span>IMDB</span>
                                        <span>8.5</span>
                                    </div>
                                    <div className={Styles.rating}>
                                        <span>TMDB</span>
                                        <span>8.5</span>
                                    </div>
                                </div>
                                {/* Genres */}
                                <div className={Styles.genres}>
                                    <span>Action</span>
                                    <span>Thriller</span>
                                    <span>Sci-Fi</span>
                                </div>
                                {/* Description */}
                                <div className={Styles.description}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt in nihil sapiente, cum magnam quibusdam molestiae debitis velit vitae minus reiciendis! Fugit dolores laudantium, sint ducimus vel nesciunt.
                                    </p>
                                </div>
                                {/* Buttons */}
                                <div className={Styles.buttons}>
                                    <button className={Styles.play_button}>
                                        <i className="fas fa-play"></i>
                                        <span>Play</span>
                                    </button>
                                    <button className={Styles.watchlist_button}>
                                        <i className="fas fa-plus"></i>
                                        <span>Watchlist</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}
