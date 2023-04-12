import React from 'react'
import Styles from './ParallaxBannar.module.css'
import { PlayNowBtn } from '@/ui/PlayNowBtn/PlayNowBtn'
import { Ratings } from '@/ui/Ratings/Ratings'
export const ParallaxBanner = () => {
    return (
        <section id={Styles.parallex} className={Styles.parallax_window}>
            <div className="container-fluid p-0">
                <div className='row mt-4'>
                    <div className="col-12">
                        <div className='row' >
                            <div className={`col-md-6 ${Styles.banner_content}`}>
                                <h1>Movie Title</h1>
                                {/* Ratings */}
                                <div className={Styles.ratings}>
                                    <Ratings />
                                    <div className='d-flex align-items-center ml-2'>
                                        <span className='badge badge-secondary p-2'>16+</span>
                                        <span className='ml-3'>2hrs : 40mins</span>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className={Styles.description}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt in nihil sapiente, cum magnam quibusdam molestiae debitis velit vitae minus reiciendis! Fugit dolores laudantium, sint ducimus vel nesciunt.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <PlayNowBtn />
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 d-none d-md-block ${Styles.banner_content}`}>
                                {/* Movie sub image */}
                                <div className={Styles.movie_sub_image_div}>
                                    <img src="https://picsum.photos/1920/1080?random=4" className='w-75 image-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
