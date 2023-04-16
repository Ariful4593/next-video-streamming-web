import React from 'react'
import Styles from './MovieThumbnailSm.module.css'
import { PlayNowBtn } from '../PlayNowBtn/PlayNowBtn'
export const MovieThumbnailSm = ({ url, title = 'Movie Title', videoId = 1 }) => {
    return (
        <div className={`${Styles.movie_row}`} style={{
            backgroundImage: `url(${url})`,
        }}>
            <div className={`${Styles.movie_content}`}>
                <div>
                    <h1>{title}</h1>
                    {/* Movie length */}
                    <div className={Styles.movie_length}>
                        <span>2h : 30m</span>
                    </div>
                    <PlayNowBtn videoId={videoId} />
                </div>
            </div>
        </div>
    )
}
