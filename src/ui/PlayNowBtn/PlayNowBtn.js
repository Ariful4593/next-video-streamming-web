import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Styles from './PlayNowBtn.module.css'
import Link from 'next/link'
export const PlayNowBtn = ({ col = '', video_id }) => {
    return (
        <div className={`${col} ${Styles.play_now_div}`}>
            <div className={Styles.video_icon}>
                <FontAwesomeIcon icon={faPlayCircle} />
            </div>
            <h1 className={Styles.play_now_label}>
                <Link href={`/details/${video_id}`}>Play Now</Link>
            </h1>
        </div>
    )
}
