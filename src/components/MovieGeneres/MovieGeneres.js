import { MovieThumbnailSm } from '@/ui/MovieThumbnailSm/MovieThumbnailSm'
import React from 'react'
import Styles from './MovieGeneres.module.css'
export const MovieGeneres = () => {
    return (
        <div className={Styles.generes_section}>
            <div className='container'>
                <div className="row">
                    <h3 className={Styles.generes_title}>Movie Generes</h3>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            return <div className='col-md-4 col-lg-3 col-sm-6 mb-4' key={index}>
                                <MovieThumbnailSm title={`Movie Title -${item}`} url={`https://picsum.photos/1920/1080?random=${item}`} video_id={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
