import React from 'react'
import LatestMoviesSlider from './Slider/LatestMoviesSlider';
import Styles from './Slider/LatestMovies.module.css'
import Link from 'next/link';

export const LatestMovies = ({ label='This is label' }) => {
    return (
        <div className={Styles.latest_movies}>
            <div className="container">
                <div className='row mt-5'>
                    <div className={`col-12 ${Styles.latest_movies_header}`}>
                        <h1 className='text-white'>{label}</h1>
                        {/* View all */}
                        <Link href={'/videos'} className={`${Styles.view_all} text-danger`}>View All</Link>
                    </div>
                    <div className="col-12">
                        <LatestMoviesSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}
