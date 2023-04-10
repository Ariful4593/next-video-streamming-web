import React from 'react'
import { BannerSlide } from './BannerSlide';
export const Banner = () => {
    return (
        <div className="container-fluid p-0">
            <div className='row mt-4'>
                <div className="col-12">
                    <BannerSlide />
                </div>
            </div>
        </div>
    )
}
