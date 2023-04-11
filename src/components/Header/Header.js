import React from 'react'
import Styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
    return (
        <div className="container  ">
                <div className='row mt-4'>
                    <div className={`col-3 ${Styles.logo_part}`}>
                        <Image
                            className={Styles.logo}
                            src={logo}
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                    <div className={`col-6 ${Styles.menu_part}`}>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/tvshows'>TV Shows</Link></li>
                            <li><Link href='/videos'>Videos</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                            <li><Link href='/pages'>Pages</Link></li>
                        </ul>
                    </div>
                    <div className={`col-3 ${Styles.profile_part}`}>
                        {/* 
                    Here will be 3 icons:
                    1. Search
                    2. Notification
                    3. Profile
                */}
                        <FontAwesomeIcon className='icon' icon={faSearch} />
                        <FontAwesomeIcon className='icon' icon={faBell} />
                        <FontAwesomeIcon className='icon' icon={faUser} />
                    </div>
                </div>
            </div>
    )
}
