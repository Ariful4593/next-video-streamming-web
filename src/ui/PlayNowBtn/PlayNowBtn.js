import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Styles from './PlayNowBtn.module.css'
export const PlayNowBtn = () => {
    return (
        <div className={Styles.play_now_div}>
            <div className={Styles.video_icon}>
                <FontAwesomeIcon icon={faPlayCircle} />
            </div>
            <h1>Play Now</h1>
        </div>
    )
}
