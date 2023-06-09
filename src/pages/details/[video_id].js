import { Header } from '@/components/Header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { VideoDetails } from '@/components/VideoDetails/VideoDetails';
import { CommentAndDescription } from '@/ui/CommentAndDescription/CommentAndDescription';
import { LatestMovies } from '@/components/Dashboard/LatestMovies';
import { Footer } from '@/components/Footer/Footer';
const VideoInfo = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    return (
        <>
            <Head>
                <title>Video Description</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <VideoDetails />

                <CommentAndDescription />
                <div className="row">
                    <div className="col-12">
                        <LatestMovies label='Upcoming' />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default VideoInfo;