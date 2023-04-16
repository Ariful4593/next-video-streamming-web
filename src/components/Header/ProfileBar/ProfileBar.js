import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'

import Styles from './ProfileBar.module.css';
export const ProfileBar = ({ searchBtnHandler }) => {
    return (
        <div className={`col-4 col-sm-6 text-end ${Styles.profile_icon} ${Styles.search_field}`}>
            <FontAwesomeIcon className='icon' icon={faSearch} onClick={() => searchBtnHandler('default')} />
            <FontAwesomeIcon className='icon' icon={faBell} />
            <FontAwesomeIcon className='icon' icon={faUser} />          
        </div>
    )
}
