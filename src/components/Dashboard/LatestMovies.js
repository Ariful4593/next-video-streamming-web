import React from 'react'
import LatestMoviesSlider from './LatestMoviesSlider'
import Styles from './LatestMovies.module.css'

export const LatestMovies = () => {
    return (
        <div className='row mt-5'>
            <div className={`col-12 ${Styles.latest_movies_header}`}>
                <h1 className=''>Latest Movies</h1>
                {/* View all */}
                <button className='btn'>View All</button>
            </div>
            <div className="col-12">
                <LatestMoviesSlider />
            </div>
        </div>
    )
}
