import React from 'react';
import Styles from './VideoDetails.module.css';
import { Ratings } from '@/ui/Ratings/Ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ShareIcons } from '@/ui/ShareIcons/ShareIcons';
export const VideoDetails = () => {
    return (
        <section className={Styles.video_details_section}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={Styles.video_player} >
                            <video src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" controls="controls" className='w-100'
                                poster="https://picsum.photos/1920/1080?random=1"
                            // Video play icon
                            // data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'
                            ></video>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={Styles.video_description}>
                            <h1 className='text-white m-0'>Video Title</h1>
                            <Ratings mp={'mt-2 ml-2'} />
                        </div>
                        {/* Thriller */}
                        <div className={Styles.video_genere}>
                            <h3 className='text-danger'>Thriller</h3>
                        </div>
                        <div className='d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4'>
                            <span className='badge badge-secondary font-size-16'>G</span>
                            <span className={`${Styles.genres_info} ml-3 font-Weight-500 `}>1hr : 30m</span>
                            <span className={`${Styles.trending_year} font-Weight-500 genres-info`}>Apr 2023</span>
                            <span className={`${Styles.trending_year} ${Styles.total_views} font-Weight-500 genres-info`}>
                                <FontAwesomeIcon icon={faEye} className='me-2' />
                                1.2M views
                            </span>
                        </div>

                        <ShareIcons />
                    </div>
                </div>
            </div>
        </section>
    )
}
