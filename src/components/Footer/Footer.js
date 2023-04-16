import React from 'react'
import Styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import play_store from '@/images/play_store.jpg'
import app_store from '@/images/app_store.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard, faComputer, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (

        <>
            <div className={Styles.footer_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 text-center text-xl-start">
                            <div className={Styles.widget_text_left}>
                                <div className={Styles.textwidget}>
                                    <ul>
                                        <li>
                                            <Link href={'/'}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link href={'/'}>Terms Of Service</Link>
                                        </li>
                                        <li>
                                            <Link href={'/'}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href={'/'}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href={'/'}>FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${Styles.widget_text_left} d-none d-xl-block`}>
                                <div className={Styles.textwidget}>
                                    <p>
                                        <small>
                                            © 2023 <a href="/" target="_blank" rel="noreferrer">STREAMIT</a>  All Rights Reserved.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-12 col-md-6  text-center">
                            <div className={Styles.footer_middle}>
                                <ul className={Styles.follow_us_link}>
                                    <li>
                                        <Link href={'/'}>
                                            <img src="https://assets-staging.viewlift.com/57e4b76f-6168-41af-bdd8-c76a2e5bf798/images/2021/04/5/1617625542787_facebookiconimages-tab.png?impolicy=resize&w=66&h=93" alt="Facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <img src="https://assets-staging.viewlift.com/5c821b9a-d172-4bd2-9913-17ef88a268d5/images/2022/01/30/1643548894761_instraiconimages-tab.png?impolicy=resize&w=66&h=93" alt="Instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <img src="https://assets-staging.viewlift.com/57e4b76f-6168-41af-bdd8-c76a2e5bf798/images/2021/04/5/1617625542792_twittericonimages-tab.png?impolicy=resize&w=66&h=93" alt="Twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <img src="https://assets-staging.viewlift.com/57e4b76f-6168-41af-bdd8-c76a2e5bf798/images/2021/04/5/1617625542793_youtubeiconimages-tab.png?impolicy=resize&w=66&h=93" alt="Youtube" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12  text-center">
                            <div className={Styles.footer_right}>
                                <ul className={Styles.our_app_link}>
                                    <li>
                                        <Link href={'/'}>
                                            <Image src={play_store} alt="Play Store" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <Image src={app_store} alt="App Store" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container-fluid ${Styles.fixed_copy_right_text} d-xl-none`}>
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <p>
                            <small>
                                © 2023 <a href="/" target="_blank" rel="noreferrer">STREAMIT</a>  All Rights Reserved.
                            </small>
                        </p>
                    </div>
                </div>
            </div>

            {/* Fixed footer */}
            <div className={`${Styles.fixed_footer} d-md-none`}>
                <div className={Styles.fixed_content}>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <FontAwesomeIcon icon={faHome} />
                                <h6>Home</h6>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <FontAwesomeIcon icon={faClapperboard} />
                                <h6>Movies</h6>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                                <h6>Series</h6>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <FontAwesomeIcon icon={faComputer} />
                                <h6>Shows</h6>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <FontAwesomeIcon icon={faUser} />
                                <h6>Login</h6>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
