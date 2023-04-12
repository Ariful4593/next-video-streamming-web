import React from 'react'
import Styles from './Header.module.css';
import Image from 'next/image'
import logo from '../../images/logo.png'
import { BurgerMenu } from '@/ui/BurgerMenu/BurgerMenu'
import { NavBar } from './Navbar/NavBar'
import { ProfileBar } from './ProfileBar/ProfileBar';
import { SearchBar } from './SearchBar/SearchBar';
import { ProfileBarSm } from './ProfileBar/ProfileBarSm';
export const Header = () => {
    const [active, setActive] = React.useState('');
    const [threeDot, setThreeDot] = React.useState(false);
    const [searchBtn, setSearchBtn] = React.useState(false);
    const [type, setType] = React.useState('');

    const activeHandler = () => {
        setActive(prev => !prev);
        setThreeDot(false);
    }

    const threeDotHandler = () => {
        setThreeDot(prev => !prev);
        setActive(false);
        setSearchBtn(false);
    }

    const searchBtnHandler = (searchType) => {
        setSearchBtn(prev => !prev);
        setActive(false);
        setType(searchType);
    }

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
                    <NavBar />
                </div>
                <div className={`col-3 ${Styles.profile_part}`}>
                    <ProfileBarSm searchBtnHandler={searchBtnHandler} />
                </div>
                {(searchBtn && type !== 'default') && <SearchBar col='col-12 col-sm-6 mt-3 search_not_default' type={type} />}
            </div>
            <div className={`row mt-4 mb-4 ${Styles.small_device}`}>
                <div className={`col-3 ${Styles.burger_menu_part}`}>
                    <BurgerMenu activeHandler={activeHandler} />
                </div>

                {/* Submenu for when clicked burger menu */}
                <div className={`col-12 ${Styles.submenu} ${active ? 'd-block' : 'd-none'} ${threeDot ? 'mt-4' : ''}`}>
                    <NavBar />
                </div>

                <div className={`col-6 col-sm-5 ${Styles.logo_part}`}>
                    <Image
                        className={Styles.logo}
                        src={logo}
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
                <div className={`col-3 col-sm-4 ${Styles.profile_part}`}>
                    <div>
                        <ProfileBarSm searchBtnHandler={searchBtnHandler} />
                    </div>
                </div>
                {(searchBtn && type !== 'default') && <SearchBar col='col-12 col-sm-6 mt-2 search_not_default' type={type} />}
                {
                    !active && <div className={`col-3 col-sm-4 ${Styles.profile_part_sm_btn}`}>
                        <span className='text-white' onClick={() => threeDotHandler()}>...</span>
                    </div>
                }


                <div className={`  ${Styles.profile_part_small_device} ${threeDot ? 'd-block' : 'd-none'}`}>
                    <div className='d-flex justify-content-end'>
                        {searchBtn && <SearchBar type={type} />}
                        <ProfileBar searchBtnHandler={searchBtnHandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}
