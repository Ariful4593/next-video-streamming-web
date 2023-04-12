import React from 'react'
import LatestMoviesSlider from './Slider/LatestMoviesSlider';
import Styles from './Slider/LatestMovies.module.css'

export const LatestMovies = ({ label }) => {
    return (
        <div className={Styles.latest_movies}>
            <div className="container">
                <div className='row mt-5'>
                    <div className={`col-12 ${Styles.latest_movies_header}`}>
                        <h1 className='text-white'>{label}</h1>
                        {/* View all */}
                        <button className='btn text-danger'>View All</button>
                    </div>
                    <div className="col-12">
                        <LatestMoviesSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}
