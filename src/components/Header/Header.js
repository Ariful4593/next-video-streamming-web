import React from 'react'
import Styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUser, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { BurgerMenu } from '@/ui/BurgerMenu/BurgerMenu'
export const Header = () => {
    const [active, setActive] = React.useState('');
    const [threeDot, setThreeDot] = React.useState(false);
    return (
        <div className={`${Styles.container} container`}>
            <div className={`row mt-4 mb-4 ${Styles.large_device}`}>
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
                    <FontAwesomeIcon className='icon' icon={faSearch} />
                    <FontAwesomeIcon className='icon' icon={faBell} />
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </div>
            </div>
            <div className={`row mt-4 mb-4 ${Styles.small_device}`}>
                <div className={`col-3 ${Styles.burger_menu_part}`}>
                    <BurgerMenu setActive={setActive} />
                </div>

                {/* Submenu for when clicked burger menu */}
                <div className={`col-12 ${Styles.submenu} ${active ? 'd-block' : 'd-none'} ${threeDot ? 'mt-4' : ''}`}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/movies'>Movies</Link></li>
                        <li><Link href='/tvshows'>TV Shows</Link></li>
                        <li><Link href='/videos'>Videos</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/pages'>Pages</Link></li>
                    </ul>
                </div>

                <div className={`col-5 ${Styles.logo_part}`}>
                    <Image
                        className={Styles.logo}
                        src={logo}
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
                <div className={`col-4 ${Styles.profile_part}`}>
                    <FontAwesomeIcon className='icon' icon={faSearch} />
                    <FontAwesomeIcon className='icon' icon={faBell} />
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </div>

                <div className={`col-4 ${Styles.profile_part_sm_btn}`}>
                    <span className='text-white' onClick={() => setThreeDot(prev => !prev)}>...</span>
                </div>

                <div className={`col-12  ${Styles.profile_part_small_device} ${threeDot ? 'd-block' : 'd-none'}`}>
                    {/* <input type="text" className='form-control' /> */}
                    <FontAwesomeIcon className='icon' icon={faSearch} />
                    <FontAwesomeIcon className='icon' icon={faBell} />
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </div>
            </div>
        </div>
    )
}
