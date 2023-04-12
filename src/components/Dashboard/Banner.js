import React from 'react'
import { BannerSlide } from './Banner/BannerSlide'
export const Banner = () => {
    return (
        <div className="container-fluid p-0">
            <div className='row'>
                <div className={`col-12 main_banner`}>
                    <BannerSlide />
                </div>
            </div>
        </div>
    )
}
