import React from 'react'
import Styles from './Banner.module.css'
import { BreadCrumb } from '@/ui/BreadCrumb/BreadCrumb'

export const Banner = () => {
    return (
        <div className="container-fluid p-0">
            <div className={`row ${Styles.main_banner_row}`} style={{
                backgroundImage: `url(https://picsum.photos/1920/1080?random=${1})`,

            }}
            >
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='text-white'>View All</h1>
                        <BreadCrumb />
                    </div>
                </div>
            </div>
        </div>
    )
}
