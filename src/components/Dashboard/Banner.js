import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannerSlide } from './BannerSlide';
export const Banner = () => {
    return (
        <div className='row mt-4'>
            <div className="col-12">
                <BannerSlide />
            </div>
        </div>
    )
}
