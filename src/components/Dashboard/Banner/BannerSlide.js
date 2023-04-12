import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Styles from './BannerSlide.module.css'
import { Ratings } from '@/ui/Ratings/Ratings';
import { PlayNowBtn } from '@/ui/PlayNowBtn/PlayNowBtn';
export const BannerSlide = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper ${Styles.swiper}`}
        >
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return <SwiperSlide key={index}
                        className={Styles.swiper_slide}
                    >
                        <div className='row' style={{
                            backgroundImage: `url(https://picsum.photos/1920/1080?random=${item})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            aspectRatio: '5/3',
                            // borderRadius: '10px',
                            backgroundRepeat: 'no-repeat',
                            margin: '0px'
                        }}
                        >
                            <div className={`col-lg-7 ${Styles.banner_content}`}>
                                <h1 className={Styles.movie_title}>Movie Title</h1>
                                {/* Ratings */}
                                <div className={Styles.ratings}>
                                    <Ratings ratings={4} />
                                    <div className='d-flex align-items-center ml-2'>
                                        <span className='badge badge-secondary p-2'>16+</span>
                                        <span className={`ml-3 ${Styles.video_duration}`}>2hrs : 40mins</span>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className={Styles.description}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt in nihil sapiente, cum magnam quibusdam molestiae debitis velit vitae minus reiciendis! Fugit dolores laudantium, sint ducimus vel nesciunt.
                                    </p>
                                </div>

                                {/* Starring, Genres, Tag */}
                                <div className={Styles.starring_genres_tag}>
                                    <div className={Styles.starring}>
                                        <span className={Styles.starring_title}>Starring:</span>
                                        <span className={`ml-2 ${Styles.star_name}`}>John Doe</span>
                                    </div>
                                    <div className={Styles.genres}>
                                        <span className={Styles.starring_title}>Genres:</span>
                                        <span className={`ml-2 ${Styles.star_name}`}>Action</span>
                                    </div>
                                    <div className={Styles.tag}>
                                        <span className={Styles.starring_title}>Tag:</span>
                                        <span className={`ml-2 ${Styles.star_name}`}>Action</span>
                                    </div>
                                </div>

                                <PlayNowBtn col='d-lg-none mt-4' />
                            </div>
                            <div className={`col-lg-5 d-none d-lg-block ${Styles.banner_content}`}>
                                {/* Video play icon with animation */}
                                <div className={Styles.play_now_div}>
                                    <div className={Styles.video_icon}>
                                        <FontAwesomeIcon icon={faPlayCircle} />
                                    </div>
                                    <h1>Watch Trailer</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}
