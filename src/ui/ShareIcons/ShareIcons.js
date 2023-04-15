import React from 'react'
import Link from 'next/link'
import Styles from './ShareIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faShareNodes } from '@fortawesome/free-solid-svg-icons'

export const ShareIcons = ({ position = 'horizontal' }) => {
    const isPosition = position === 'horizontal' ? Styles.share_icons_section_horizontal : Styles.share_icons_section_vertical
    return (
        <div className={Styles.share_icons_section}>
            <ul className={isPosition}>
                <li>
                    <span className={Styles.media_section}>
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faShareNodes} />
                        </Link>
                    </span>
                    {/* If hover, show the social media icon */}
                    <div className={Styles.social_media_icons}>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </span>
                </li>
            </ul>
        </div>
    )
}
