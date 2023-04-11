import React from 'react'
import styles from './TopTenMovies.module.css'
import VerticalSliderWithThumb from '../Slider/VerticalSliderWithThumb'

export const TopTenMovies = ({label = 'Top Ten Movies'}) => {
    return (
        <div className={styles.top_ten_movies}>
            <div className="container">
                <div className='row mt-5'>
                    <div className={`col-12 ${styles.top_ten_movies__header}`}>
                        <h1 className='text-white'>{label}</h1>
                        {/* View all */}
                        <button className='btn text-danger'>View All</button>
                    </div>
                    <div className="col-12">
                        <VerticalSliderWithThumb />
                    </div>
                </div>
            </div>
        </div>
    )
}
