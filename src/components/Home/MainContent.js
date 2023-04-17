import React from 'react';
import hawa from '/public/assets/images/hawa.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
// import Pagination
import { Navigation, Pagination } from "swiper";

export const MainContent = () => {
    return (
        <div className="main-content">
            <section id="iq-favorites">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="main-title">Movies</h4>
                                <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="favourite-slider">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            // modules={[Navigation, Pagination]}
                            className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider mySwiper"
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="block-images position-relative ">
                                                <div className="img-box">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={hawa}
                                                        alt="Hawa"
                                                        loading='lazy'
                                                    />
                                                </div>
                                                <div className="block-description">
                                                    <h6 className="iq-title"><a href="show-detail.html">Hawa</a></h6>
                                                    <div className="movie-time d-flex align-items-center my-2">
                                                        <span className="text-white">1hr : 50mins</span>
                                                    </div>
                                                    <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                        <ul
                                                            className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                        </ul>
                                                        <span className="text-white ml-2">5</span>
                                                    </div>
                                                    <div className="hover-buttons">
                                                        <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                            className="fa fa-play mr-1" aria-hidden="true"></i>
                                                            Play Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="block-social-info">
                                                    <ul className="list-inline p-0 m-0 music-play-lists">
                                                        <li className="share">
                                                            <span><i className="ri-share-fill"></i></span>
                                                            <div className="share-box">
                                                                <div className="d-flex align-items-center">
                                                                    <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                        target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                            className="ri-facebook-fill"></i></a>
                                                                    <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                        target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                            className="ri-twitter-fill"></i></a>
                                                                    <a href="#"
                                                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                        className="share-ico iq-copy-link" tabIndex="0"><i
                                                                            className="ri-links-fill"></i></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span><i className="ri-heart-fill"></i></span>
                                                            <span className="count-box">2+</span>
                                                        </li>
                                                        <li><span><i className="ri-add-line"></i></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>

                        {/* <div className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                            <ul className="swiper-wrapper p-0 m-0 ">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                                        <li className="swiper-slide slide-item" key={index}>
                                            <div className="block-images position-relative ">
                                                <div className="img-box">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={hawa}
                                                        alt="Hawa"
                                                        loading='lazy'
                                                    />
                                                </div>
                                                <div className="block-description">
                                                    <h6 className="iq-title"><a href="show-detail.html">Hawa</a></h6>
                                                    <div className="movie-time d-flex align-items-center my-2">
                                                        <span className="text-white">1hr : 50mins</span>
                                                    </div>
                                                    <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                        <ul
                                                            className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </li>
                                                        </ul>
                                                        <span className="text-white ml-2">5</span>
                                                    </div>
                                                    <div className="hover-buttons">
                                                        <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                            className="fa fa-play mr-1" aria-hidden="true"></i>
                                                            Play Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="block-social-info">
                                                    <ul className="list-inline p-0 m-0 music-play-lists">
                                                        <li className="share">
                                                            <span><i className="ri-share-fill"></i></span>
                                                            <div className="share-box">
                                                                <div className="d-flex align-items-center">
                                                                    <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                        target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                            className="ri-facebook-fill"></i></a>
                                                                    <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                        target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                            className="ri-twitter-fill"></i></a>
                                                                    <a href="#"
                                                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                        className="share-ico iq-copy-link" tabIndex="0"><i
                                                                            className="ri-links-fill"></i></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span><i className="ri-heart-fill"></i></span>
                                                            <span className="count-box">2+</span>
                                                        </li>
                                                        <li><span><i className="ri-add-line"></i></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* <section id="iq-upcoming-movie">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="main-title">TV Series</h4>
                                <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="favourite-slider">
                        <div className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                            <ul className="swiper-wrapper p-0 m-0 ">
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={hawa}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Hawa</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 50mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">5</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                    className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">2+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={aynabazi}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Aynabazi</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">3hr : 10mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <img src="images/banner-1.jpeg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Syndicate</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">3hr : 10mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>

                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={noDorai}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">No Dorai</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">25+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/08.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 22mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/09.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1h 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/03.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">25+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/04.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 22mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/05.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1h 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <img src="images/video/10.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 50mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                    className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">2+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iq-upcoming-movie">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="main-title">Dubbed</h4>
                                <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="favourite-slider">
                        <div className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                            <ul className="swiper-wrapper p-0 m-0 ">
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={hawa}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Hawa</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 50mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">5</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                    className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">2+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={aynabazi}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Aynabazi</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">3hr : 10mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <img src="images/banner-1.jpeg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Syndicate</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">3hr : 10mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>

                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <Image
                                                className={'img-fluid'}
                                                src={noDorai}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">No Dorai</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">25+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/08.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 22mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/09.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1h 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/03.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">3.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">25+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/04.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 22mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src="images/video/05.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1h 45mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover">
                                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">0</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                        <div className="img-box">
                                            <img src="images/video/10.jpg" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <span className="text-white">1hr : 50mins</span>
                                            </div>
                                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-0">
                                                <ul
                                                    className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="text-white ml-2">4.7</span>
                                            </div>
                                            <div className="hover-buttons">
                                                <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                    className="fa fa-play mr-1" aria-hidden="true"></i>
                                                    Play Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-social-info">
                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                <li className="share">
                                                    <span><i className="ri-share-fill"></i></span>
                                                    <div className="share-box">
                                                        <div className="d-flex align-items-center">
                                                            <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-facebook-fill"></i></a>
                                                            <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i
                                                                    className="ri-twitter-fill"></i></a>
                                                            <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                className="share-ico iq-copy-link" tabIndex="0"><i
                                                                    className="ri-links-fill"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span><i className="ri-heart-fill"></i></span>
                                                    <span className="count-box">2+</span>
                                                </li>
                                                <li><span><i className="ri-add-line"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container-fluid">
                    <div className="row m-0 p-0">
                        <div id="iq-trending" className="iq-tvshow-tabs iq-rtl-direction iq-trending-tabs">
                            <div className="iq-main-header d-flex align-items-center justify-content-between">
                                <h4 className="main-title">
                                    Trending Now
                                </h4>
                            </div>
                            <div className="trending-contens position-relative ">
                                <div id="gallery-top" className="gallery-thumbs" data-swiper="gallery-top">
                                    <ul className="swiper-wrapper list-inline p-0 m-0  trending-slider-nav align-items-center ">
                                        <li className="swiper-slide">
                                            <a href="javascript:void(0);">
                                                <div className="movie-swiper position-relative">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={exgf}
                                                        alt=""
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-slide">
                                            <a href="javascript:void(0);">
                                                <div className="movie-swiper position-relative">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={noDorai}
                                                        alt=""
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-slide">
                                            <a href="javascript:void(0);">
                                                <div className="movie-swiper position-relative">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={hawa}
                                                        alt=""
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-slide">
                                            <a href="javascript:void(0);">
                                                <div className="movie-swiper position-relative">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={aynabazi}
                                                        alt=""
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-slide">
                                            <a href="javascript:void(0);" tabIndex="0">
                                                <div className="movie-swiper position-relative">
                                                    <Image
                                                        className={'img-fluid'}
                                                        src={hawa}
                                                        alt=""
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div id="gallery-bottom" className="swiper trending-tab-slider" data-swiper="gallery-bottom">
                                    <ul className="swiper-wrapper  list-inline p-0 m-0 d-flex align-items-center">
                                        <li className="swiper-slide swiper-bg slider-big-img-1"
                                            style={{
                                                backgroundImage: `url(${exgf}) !important`
                                            }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data1"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data2" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data3" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data4" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content trending-content">
                                                            <div id="trending-data1" className="tab-pane fade active show">
                                                                <div
                                                                    className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                    <a href="javascript:void(0);" tabIndex="0">
                                                                        <div className="res-logo">
                                                                            <div className="channel-logo">
                                                                                <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <h1 className="trending-text big-title text-uppercase">X Girlfriend</h1>
                                                                    <div className="d-flex align-items-center text-white text-detail">
                                                                        <span className="badge badge-secondary p-3">18+</span>
                                                                        <span className="ml-3">3 Seasons</span>
                                                                        <span className="trending-year">2020</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center series mb-4">
                                                                        <a href="javascript:void(0);"><img
                                                                            src="images/trending/trending-label.png" className="img-fluid"
                                                                            alt="" /></a>
                                                                        <span className="text-gold ml-3">#2 in Series Today</span>
                                                                    </div>
                                                                    <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting
                                                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                                                        ever since the 1500s.
                                                                    </p>
                                                                    <div className="p-btns">
                                                                        <div className="d-flex align-items-center p-0">
                                                                            <a href="show-detail.html" className="btn btn-hover mr-2"
                                                                                tabIndex="0"><i className="fa fa-play mr-2"
                                                                                    aria-hidden="true"></i>Play Now</a>
                                                                            <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                                className="ri-add-line"></i>My
                                                                                List</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="trending-list mt-4">
                                                                        <div className="text-primary title">Starring: <span
                                                                            className="text-body">Wagner
                                                                            Moura, Boyd Holbrook, Joanna</span>
                                                                        </div>
                                                                        <div className="text-primary title">Genres: <span
                                                                            className="text-body">Crime,
                                                                            Action, Thriller, Biography</span>
                                                                        </div>
                                                                        <div className="text-primary title">This Is: <span
                                                                            className="text-body">Violent,
                                                                            Forceful</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="trending-data2" className="tab-pane fade ">
                                                                <div
                                                                    className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                    <a href="show-details.html" tabIndex="0">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                        </div>
                                                                    </a>
                                                                    <h1 className="trending-text big-title text-uppercase">No Dorai</h1>
                                                                    <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                        <span className="season_date ml-2">
                                                                            2 Seasons
                                                                        </span>
                                                                        <span className="trending-year">Feb 2019</span>
                                                                    </div>
                                                                    <div className="iq-custom-select d-inline-block sea-epi">
                                                                        <select name="cars" className="form-control season-select">
                                                                            <option value="season1">Season 1</option>
                                                                            <option value="season2">Season 2</option>
                                                                            <option value="season3">Season 3</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="episodes-contens mt-4">
                                                                        <div
                                                                            className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/01.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 1</a>
                                                                                        <span className="text-primary">2.25 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/02.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body ">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 2</a>
                                                                                        <span className="text-primary">3.23 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">
                                                                                        Lorem Ipsum is simply dummy text of the printing and
                                                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                                                        standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/03.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 3</a>
                                                                                        <span className="text-primary">2 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/04.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body ">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 4</a>
                                                                                        <span className="text-primary">1.12 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/05.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 5</a>
                                                                                        <span className="text-primary">2.54 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="trending-data3" className="tab-pane fade">
                                                                <div
                                                                    className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                    <a href="javascript:void(0);" tabIndex="0">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                        </div>
                                                                    </a>
                                                                    <h1 className="trending-text big-title text-uppercase">Hawa</h1>
                                                                    <div className="episodes-contens mt-4">
                                                                        <div
                                                                            className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="watch-video.html" target="_blank">
                                                                                        <img src="images/episodes/01.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="watch-video.html" target="_blank"
                                                                                                tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                        <span className="text-primary">2.25 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="watch-video.html" target="_blank">
                                                                                        <img src="images/episodes/02.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="watch-video.html" target="_blank"
                                                                                                tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                        <span className="text-primary">3.23 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="watch-video.html" target="_blank">
                                                                                        <img src="images/episodes/03.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="watch-video.html" target="_blank"
                                                                                                tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                        <span className="text-primary">2 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="watch-video.html" target="_blank">
                                                                                        <img src="images/episodes/04.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="watch-video.html" target="_blank"
                                                                                                tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                        <span className="text-primary">1.12 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="watch-video.html" target="_blank">
                                                                                        <img src="images/episodes/05.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="watch-video.html" target="_blank"
                                                                                                tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                        <span className="text-primary">2.54 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="trending-data4" className="tab-pane fade">
                                                                <div
                                                                    className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                    <a href="javascript:void(0);" tabIndex="0">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                        </div>
                                                                    </a>
                                                                    <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                    <div className="episodes-contens mt-4">
                                                                        <div
                                                                            className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/01.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 1</a>
                                                                                        <span className="text-primary">2.25 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/02.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 2</a>
                                                                                        <span className="text-primary">3.23 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/03.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 3</a>
                                                                                        <span className="text-primary">2 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/04.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 4</a>
                                                                                        <span className="text-primary">1.12 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="e-item">
                                                                                <div className="block-image position-relative">
                                                                                    <a href="show-details.html">
                                                                                        <img src="images/episodes/05.jpg" className="img-fluid"
                                                                                            alt="" />
                                                                                    </a>
                                                                                    <div className="episode-play-info">
                                                                                        <div className="episode-play">
                                                                                            <a href="show-details.html" tabIndex="0"><i
                                                                                                className="ri-play-fill"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="episodes-description text-body">
                                                                                    <div
                                                                                        className="d-flex align-items-center justify-content-between">
                                                                                        <a href="show-details.html">Episode 5</a>
                                                                                        <span className="text-primary">2.54 m</span>
                                                                                    </div>
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                        printing and typesetting industry. Lorem Ipsum has been
                                                                                        the industry's standard.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide swiper-bg slider-big-img-2" style={{
                                            backgroundImage: `url(${noDorai}) !important`
                                        }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data5"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data6" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data7" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data8" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="trending-content tab-content">
                                                        <div id="trending-data5" className="tab-pane fade active show ">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="res-logo">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">No Dorai</h1>
                                                                <div className="d-flex align-items-center text-white text-detail">
                                                                    <span className="badge badge-secondary p-3">18+</span>
                                                                    <span className="ml-3">3 Seasons</span>
                                                                    <span className="trending-year">2020</span>
                                                                </div>
                                                                <div className="d-flex align-items-center series mb-4">
                                                                    <a href="javascript:void(0);"><img
                                                                        src="images/trending/trending-label.png" className="img-fluid"
                                                                        alt="" /></a>
                                                                    <span className="text-gold ml-3">#2 in Series Today</span>
                                                                </div>
                                                                <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                    since the 1500s.
                                                                </p>
                                                                <div className="p-btns">
                                                                    <div className="d-flex align-items-center p-0">
                                                                        <a href="show-details.html" className="btn btn-hover mr-2"
                                                                            tabIndex="0"><i className="fa fa-play mr-2"
                                                                                aria-hidden="true"></i>Play Now</a>
                                                                        <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                            className="ri-add-line"></i>My
                                                                            List</a>
                                                                    </div>
                                                                </div>
                                                                <div className="trending-list mt-4">
                                                                    <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                                        Moura, Boyd Holbrook, Joanna</span>
                                                                    </div>
                                                                    <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                                        Action, Thriller, Biography</span>
                                                                    </div>
                                                                    <div className="text-primary title">This Is: <span
                                                                        className="text-body">Violent,
                                                                        Forceful</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data6" className="tab-pane fade ">
                                                            <div
                                                                className="trending-info  align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="show-details.html" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                    <span className="season_date ml-2">
                                                                        2 Seasons
                                                                    </span>
                                                                    <span className="trending-year">Feb 2019</span>
                                                                </div>
                                                                <div className="iq-custom-select d-inline-block sea-epi">
                                                                    <select name="cars" className="form-control season-select">
                                                                        <option value="season1">Season 1</option>
                                                                        <option value="season2">Season 2</option>
                                                                        <option value="season3">Season 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">
                                                                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                    standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data7" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data8" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide swiper-bg slider-big-img-2" style={{
                                            backgroundImage: `url(${noDorai}) !important`
                                        }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data5"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data6" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data7" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data8" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="trending-content tab-content">
                                                        <div id="trending-data5" className="tab-pane fade active show ">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="res-logo">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">No Dorai</h1>
                                                                <div className="d-flex align-items-center text-white text-detail">
                                                                    <span className="badge badge-secondary p-3">18+</span>
                                                                    <span className="ml-3">3 Seasons</span>
                                                                    <span className="trending-year">2020</span>
                                                                </div>
                                                                <div className="d-flex align-items-center series mb-4">
                                                                    <a href="javascript:void(0);"><img
                                                                        src="images/trending/trending-label.png" className="img-fluid"
                                                                        alt="" /></a>
                                                                    <span className="text-gold ml-3">#2 in Series Today</span>
                                                                </div>
                                                                <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                    since the 1500s.
                                                                </p>
                                                                <div className="p-btns">
                                                                    <div className="d-flex align-items-center p-0">
                                                                        <a href="show-details.html" className="btn btn-hover mr-2"
                                                                            tabIndex="0"><i className="fa fa-play mr-2"
                                                                                aria-hidden="true"></i>Play Now</a>
                                                                        <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                            className="ri-add-line"></i>My
                                                                            List</a>
                                                                    </div>
                                                                </div>
                                                                <div className="trending-list mt-4">
                                                                    <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                                        Moura, Boyd Holbrook, Joanna</span>
                                                                    </div>
                                                                    <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                                        Action, Thriller, Biography</span>
                                                                    </div>
                                                                    <div className="text-primary title">This Is: <span
                                                                        className="text-body">Violent,
                                                                        Forceful</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data6" className="tab-pane fade ">
                                                            <div
                                                                className="trending-info  align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="show-details.html" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                    <span className="season_date ml-2">
                                                                        2 Seasons
                                                                    </span>
                                                                    <span className="trending-year">Feb 2019</span>
                                                                </div>
                                                                <div className="iq-custom-select d-inline-block sea-epi">
                                                                    <select name="cars" className="form-control season-select">
                                                                        <option value="season1">Season 1</option>
                                                                        <option value="season2">Season 2</option>
                                                                        <option value="season3">Season 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">
                                                                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                    standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data7" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data8" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide swiper-bg slider-big-img-3"
                                            style={{
                                                backgroundImage: `url(${hawa}) !important`
                                            }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data11"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data12" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data13" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data14" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="trending-content tab-content">
                                                        <div id="trending-data11" className="tab-pane fade active show ">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="res-logo">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail">
                                                                    <span className="badge badge-secondary p-3">18+</span>
                                                                    <span className="ml-3">3 Seasons</span>
                                                                    <span className="trending-year">2020</span>
                                                                </div>
                                                                <div className="d-flex align-items-center series mb-4">
                                                                    <a href="javascript:void(0);"><img
                                                                        src="images/trending/trending-label.png" className="img-fluid"
                                                                        alt="" /></a>
                                                                    <span className="text-gold ml-3">#2 in Series Today</span>
                                                                </div>
                                                                <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                    since the 1500s.
                                                                </p>
                                                                <div className="p-btns">
                                                                    <div className="d-flex align-items-center p-0">
                                                                        <a href="show-details.html" className="btn btn-hover mr-2"
                                                                            tabIndex="0"><i className="fa fa-play mr-2"
                                                                                aria-hidden="true"></i>Play Now</a>
                                                                        <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                            className="ri-add-line"></i>My
                                                                            List</a>
                                                                    </div>
                                                                </div>
                                                                <div className="trending-list mt-4">
                                                                    <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                                        Moura, Boyd Holbrook, Joanna</span>
                                                                    </div>
                                                                    <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                                        Action, Thriller, Biography</span>
                                                                    </div>
                                                                    <div className="text-primary title">This Is: <span
                                                                        className="text-body">Violent,
                                                                        Forceful</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data12" className="tab-pane fade ">
                                                            <div
                                                                className="trending-info  align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="show-details.html" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                    <span className="season_date ml-2">
                                                                        2 Seasons
                                                                    </span>
                                                                    <span className="trending-year">Feb 2019</span>
                                                                </div>
                                                                <div className="iq-custom-select d-inline-block sea-epi">
                                                                    <select name="cars" className="form-control season-select">
                                                                        <option value="season1">Season 1</option>
                                                                        <option value="season2">Season 2</option>
                                                                        <option value="season3">Season 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">
                                                                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                    standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data13" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data14" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide swiper-bg slider-big-img-4"
                                            style={{
                                                backgroundImage: `url(${aynabazi}) !important`
                                            }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data15"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data16" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data17" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data18" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="trending-content tab-content">
                                                        <div id="trending-data15" className="tab-pane fade active show ">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="res-logo">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail">
                                                                    <span className="badge badge-secondary p-3">18+</span>
                                                                    <span className="ml-3">3 Seasons</span>
                                                                    <span className="trending-year">2020</span>
                                                                </div>
                                                                <div className="d-flex align-items-center series mb-4">
                                                                    <a href="javascript:void(0);"><img
                                                                        src="images/trending/trending-label.png" className="img-fluid"
                                                                        alt="" /></a>
                                                                    <span className="text-gold ml-3">#2 in Series Today</span>
                                                                </div>
                                                                <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                    since the 1500s.
                                                                </p>
                                                                <div className="p-btns">
                                                                    <div className="d-flex align-items-center p-0">
                                                                        <a href="show-details.html" className="btn btn-hover mr-2"
                                                                            tabIndex="0"><i className="fa fa-play mr-2"
                                                                                aria-hidden="true"></i>Play Now</a>
                                                                        <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                            className="ri-add-line"></i>My
                                                                            List</a>
                                                                    </div>
                                                                </div>
                                                                <div className="trending-list mt-4">
                                                                    <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                                        Moura, Boyd Holbrook, Joanna</span>
                                                                    </div>
                                                                    <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                                        Action, Thriller, Biography</span>
                                                                    </div>
                                                                    <div className="text-primary title">This Is: <span
                                                                        className="text-body">Violent,
                                                                        Forceful</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data16" className="tab-pane fade ">
                                                            <div
                                                                className="trending-info  align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="show-details.html" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                    <span className="season_date ml-2">
                                                                        2 Seasons
                                                                    </span>
                                                                    <span className="trending-year">Feb 2019</span>
                                                                </div>
                                                                <div className="iq-custom-select d-inline-block sea-epi">
                                                                    <select name="cars" className="form-control season-select">
                                                                        <option value="season1">Season 1</option>
                                                                        <option value="season2">Season 2</option>
                                                                        <option value="season3">Season 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">
                                                                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                    standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data17" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data18" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="swiper-slide swiper-bg slider-big-img-5"
                                            style={{
                                                backgroundImage: `url(${hawa}) !important`
                                            }}>
                                            <div className="position-relative">
                                                <div className="trending-custom-tab">
                                                    <div className="tab-title-info position-relative">
                                                        <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                            role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" data-toggle="pill" href="#trending-data19"
                                                                    role="tab" aria-selected="true">Overview</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data20" role="tab"
                                                                    aria-selected="false">Episodes</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data21" role="tab"
                                                                    aria-selected="false">Trailers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="pill" href="#trending-data22" role="tab"
                                                                    aria-selected="false">Similar Like This</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="trending-content tab-content">
                                                        <div id="trending-data19" className="tab-pane fade active show ">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="res-logo">
                                                                        <div className="channel-logo">
                                                                            <img src="images/logo.png" className="c-logo" alt="streamit" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail">
                                                                    <span className="badge badge-secondary p-3">18+</span>
                                                                    <span className="ml-3">3 Seasons</span>
                                                                    <span className="trending-year">2020</span>
                                                                </div>
                                                                <div className="d-flex align-items-center series mb-4">
                                                                    <a href="javascript:void(0);"><img
                                                                        src="images/trending/trending-label.png" className="img-fluid"
                                                                        alt="" /></a>
                                                                    <span className="text-gold ml-3">#2 in Series Today</span>
                                                                </div>
                                                                <p className="trending-dec">Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                    since the 1500s.
                                                                </p>
                                                                <div className="p-btns">
                                                                    <div className="d-flex align-items-center p-0">
                                                                        <a href="show-details.html" className="btn btn-hover mr-2"
                                                                            tabIndex="0"><i className="fa fa-play mr-2"
                                                                                aria-hidden="true"></i>Play Now</a>
                                                                        <a href="javascript:void(0);" className="btn btn-link" tabIndex="0"><i
                                                                            className="ri-add-line"></i>My
                                                                            List</a>
                                                                    </div>
                                                                </div>
                                                                <div className="trending-list mt-4">
                                                                    <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                                        Moura, Boyd Holbrook, Joanna</span>
                                                                    </div>
                                                                    <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                                        Action, Thriller, Biography</span>
                                                                    </div>
                                                                    <div className="text-primary title">This Is: <span
                                                                        className="text-body">Violent,
                                                                        Forceful</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data20" className="tab-pane fade ">
                                                            <div
                                                                className="trending-info  align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="show-details.html" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="d-flex align-items-center text-white text-detail mb-4">
                                                                    <span className="season_date ml-2">
                                                                        2 Seasons
                                                                    </span>
                                                                    <span className="trending-year">Feb 2019</span>
                                                                </div>
                                                                <div className="iq-custom-select d-inline-block sea-epi">
                                                                    <select name="cars" className="form-control season-select">
                                                                        <option value="season1">Season 1</option>
                                                                        <option value="season2">Season 2</option>
                                                                        <option value="season3">Season 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">
                                                                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                    standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body ">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data21" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="watch-video.html" target="_blank">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="watch-video.html" target="_blank"
                                                                                            tabIndex="0"><i className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="watch-video.html" target="_blank">Trailer 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="trending-data22" className="tab-pane fade">
                                                            <div
                                                                className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                                <a href="javascript:void(0);" tabIndex="0">
                                                                    <div className="channel-logo">
                                                                        <img src="images/logo.png" className="c-logo" alt="stramit" />
                                                                    </div>
                                                                </a>
                                                                <h1 className="trending-text big-title text-uppercase">the hero camp</h1>
                                                                <div className="episodes-contens mt-4">
                                                                    <div
                                                                        className="owl-carousel owl-theme episodes-slider1 list-inline p-0 mb-0 iq-rtl-direction">
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/01.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 1</a>
                                                                                    <span className="text-primary">2.25 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/02.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 2</a>
                                                                                    <span className="text-primary">3.23 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/03.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 3</a>
                                                                                    <span className="text-primary">2 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/04.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 4</a>
                                                                                    <span className="text-primary">1.12 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="e-item">
                                                                            <div className="block-image position-relative">
                                                                                <a href="show-details.html">
                                                                                    <img src="images/episodes/05.jpg" className="img-fluid" alt="" />
                                                                                </a>
                                                                                <div className="episode-play-info">
                                                                                    <div className="episode-play">
                                                                                        <a href="show-details.html" tabIndex="0"><i
                                                                                            className="ri-play-fill"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="episodes-description text-body">
                                                                                <div className="d-flex align-items-center justify-content-between">
                                                                                    <a href="show-details.html">Episode 5</a>
                                                                                    <span className="text-primary">2.54 m</span>
                                                                                </div>
                                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the
                                                                                    printing and typesetting industry. Lorem Ipsum has been the
                                                                                    industry's standard.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="swiper-arrow swiper-button-next"></div>
                                <div className="swiper-arrow swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
