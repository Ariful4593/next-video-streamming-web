import React from 'react';
import Styles from './CommentAndDescription.module.css';
import { Ratings } from '../Ratings/Ratings';

export const CommentAndDescription = () => {
    return (
        <div className={Styles.main_section}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={Styles.tab_section}>
                            <ul>
                                <li>Description</li>
                                <li>Comments</li>
                            </ul>
                        </div>
                        <div className={Styles.tab_content}>
                            <div className={Styles.discription_part}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ducimus, in repellendus cumque blanditiis. Dignissimos, magni quasi consequatur odit placeat ad eos nisi sequi beatae cumque suscipit qui repudiandae?
                                </p>
                            </div>
                            <div className={Styles.comment_part}>
                                <div className={Styles.comment_box}>
                                    <div className={Styles.comment_header}>
                                        <div className={Styles.commenter_img}>
                                            <img src="https://picsum.photos/1920/1080?random=1" alt="" />
                                        </div>
                                        <div className={Styles.commenter_name}>
                                            <h5>John Doe</h5>
                                            <p>2 days ago</p>
                                        </div>
                                    </div>
                                    <div className={Styles.comment_body}>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ducimus, in repellendus cumque blanditiis. Dignissimos, magni quasi consequatur odit placeat ad eos nisi sequi beatae cumque suscipit qui repudiandae?
                                        </p>
                                        <p>Your email address will not published. Required feilds are marked*</p>
                                        <span>Your ratings</span><Ratings />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
