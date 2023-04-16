import React from 'react'
import Styles from './Ratings.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export const Ratings = ({ ratings = 4, mp }) => {
    return (
        <div className={`${Styles.rating} ${mp}`}>
            <ul>
                {
                    [...Array(ratings)].map((_, i) => (
                        <li key={i}>
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                    ))
                }
            </ul>
            <span className='text-white ml-2'>{4.7}(IMDB)</span>
        </div>
    )
}
