import React from 'react';
import Styles from './CommentAndDescription.module.css';
import { Ratings } from '../Ratings/Ratings';

export const CommentAndDescription = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const handleTab = (index) => {
        setActiveTab(index)
    }
    return (
        <div className={Styles.main_section}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={Styles.tab_section}>
                            <ul>
                                <li onClick={() => (handleTab(0))} style={{
                                    backgroundColor: !activeTab ? 'red' : '#000',
                                }}>Description</li>
                                <li onClick={() => (handleTab(1))} style={{
                                    backgroundColor: activeTab ? 'red' : '#000',
                                }}>Comments</li>
                            </ul>
                        </div>
                        <div className={Styles.tab_content}>
                            {
                                !activeTab ? (
                                    <div className={Styles.discription_part}>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ducimus, in repellendus cumque blanditiis. Dignissimos, magni quasi consequatur odit placeat ad eos nisi sequi beatae cumque suscipit qui repudiandae?
                                        </p>
                                    </div>
                                ) : (<div className={Styles.comment_part}>
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
                                            <p className={Styles.email_not_published}>Your email address will not published. Required feilds are marked*</p>
                                            <div className={Styles.comment_form_ratings}>
                                                <h4 className='text-white m-0'>Your Ratings</h4>
                                                <Ratings mp={' ml-2'} />
                                            </div>

                                            <div className={Styles.review_form}>
                                                <form action="">
                                                    <div className="form-group">
                                                        <label htmlFor="comment" className=''>Your Review*</label>
                                                        <textarea name="comment" id="comment" cols="30" rows="8" className='form-control shadow-none' required></textarea>

                                                        {/* Name and Email Feild */}
                                                        <div className={`row ${Styles.input_feild}`}>
                                                            <div className="col-6">
                                                                <div className={`form-group`}>
                                                                    <label htmlFor="name">Name*</label>
                                                                    <input type="text" className='form-control shadow-none' required />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="email">Email*</label>
                                                                    <input type="email" className='form-control shadow-none' required />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* checkbox and submit button */}
                                                        <div className={`form-group ${Styles.checkbox_div}`}>
                                                            <input type="checkbox" className='shadow-none' />
                                                            <label htmlFor="email">Save my name, email, and website in this browser for the next time I comment.</label>
                                                        </div>

                                                        <div className={`form-group ${Styles.submit_btn_div}`}>
                                                            <button className='btn btn-primary shadow-none'>Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
