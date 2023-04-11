import React from 'react'
import Styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={Styles.footer_section}>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-4">
                        <div className={Styles.footer_section__left}>
                            <h1>Movie App</h1>
                            <p>© 2023 Movie App. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={Styles.footer_section__center}>
                            <h1>Links</h1>
                            <ul>
                                <li>Home</li>
                                <li>Movie</li>
                                <li>TV Shows</li>
                                <li>News</li>
                                <li>Blog</li>
                                <li>Pages</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={Styles.footer_section__right}>
                            <h1>Follow Us</h1>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={Styles.footer_section__right}>
                            <h1>Follow Us</h1>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={Styles.footer_section__right}>
                            <h1>Follow Us</h1>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
