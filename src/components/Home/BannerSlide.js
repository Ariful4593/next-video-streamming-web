import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export const BannerSlide = () => {
    return (
        <section id="home-banner-slider"
            className="iq-main-slider p-0 iq-rtl-direction swiper banner-home-swiper overflow-hidden"
            data-swiper="home-banner-slider">
            <Swiper
                navigation={true}
                modules={[Navigation]}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return <SwiperSlide key={index}
                        >
                            <div className="slider m-0 p-0 swiper-wrapper home-slider">
                                <div className="swiper-slide  slide swiper-bg s-bg-1">
                                    <div className="container-fluid position-relative h-100">
                                        <div className="slider-inner h-100">
                                            <div className="row align-items-center  iq-ltr-direction h-100 ">
                                                <div className="col-lg-7 col-md-12">
                                                    <a href="#">
                                                        <div className="channel-logo" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                                            <Image
                                                                className={'c-logo'}
                                                                src={logo}
                                                                alt="streamit"
                                                                // width={180}
                                                                // height={37}
                                                                loading='lazy'
                                                            // priority
                                                            />
                                                        </div>
                                                    </a>
                                                    <h1 className="slider-text big-title title text-uppercase" data-iq-gsap="onStart"
                                                        data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                                        Syndicate</h1>
                                                    <div className="d-flex flex-wrap align-items-center r-mb-23" data-iq-gsap="onStart"
                                                        data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
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
                                                            <span className="text-white ml-2">4.7(lmdb)</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-3">
                                                            <span className="ml-3">1hrs : 45mins</span>
                                                        </div>
                                                        <p data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150"
                                                            data-iq-duration="1" data-iq-delay=".5">
                                                            Piracy is an act of robbery or criminal violence by ship or boat-borne attackers upon
                                                            another ship or a coastal area, typically with the goal of stealing cargo and other
                                                            valuable items or properties.
                                                        </p>
                                                    </div>
                                                    <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                                                        <div className="text-primary title starring">
                                                            Starring: <span className="text-body"><a href="cast-karen-gilchrist.html">Karen Gilchrist,</a>
                                                                <a href="#">James Earl Jones</a>
                                                            </span>
                                                        </div>
                                                        <div className="text-primary title genres">
                                                            Genres: <span className="text-body"><a href="category-action.html">Action</a></span>
                                                        </div>
                                                        <div className="text-primary title tag">
                                                            Tag: <span className="text-body"><a href="tags/action.html">Action,</a><a
                                                                href="tags/adventure.html">
                                                                Adventure,</a><a href="tags/horror.html">Horror</a></span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="0"
                                                        data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".6">
                                                        <a href="show-detail.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                                            aria-hidden="true"></i>Play Now</a>
                                                    </div>
                                                </div>
                                                <div className=" col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                                    <a href="https://templates.iqonic.design/streamit/frontend/html/video/trailer.mp4"
                                                        className="video-open playbtn" tabIndex="0">
                                                        <svg width="92" height="92" viewBox="0 0 92 92" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="46.3749" cy="45.7833" r="43.4086" stroke="white" strokeWidth="4" />
                                                            <path
                                                                d="M42.9202 61.046C41.5925 61.9496 39.7949 60.9987 39.7949 59.3926L39.7949 32.2626C39.7949 30.6172 41.6712 29.6757 42.9904 30.6592L62.0136 44.8421C63.1154 45.6635 63.0796 47.3257 61.9435 48.0989L42.9202 61.046Z"
                                                                fill="white" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    )
}
