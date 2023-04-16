import { Header } from '@/components/Header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Styles from '@/styles/Home.module.css';
import { Banner } from '@/components/ViewAll/Banner/Banner';
import { MovieGeneres } from '@/components/MovieGeneres/MovieGeneres';
import { Footer } from '@/components/Footer/Footer';
const Videos = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={Styles.main}
            >
                <Header />
                <Banner />
                <MovieGeneres />
                <Footer />
            </main>
        </>
    )
}

export default Videos;