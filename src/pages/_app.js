import '@/styles/globals.css'
import Head from 'next/head';
// import './assets/css/bootstrap.min.css'
// import './assets/css/typography.css'
// import './assets/css/style.css'
// import './assets/css/responsive.css'
// import './assets/css/swiper.min.css'
// import './assets/css/swiper.css'
// import './assets/css/custom.css'
import Script from 'next/script';
// import test from './assets/js/jquery-3.5.1.min.js'
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>
    <Component {...pageProps} />
    <Script src='./assets/js/jquery-3.5.1.min.js' strategy="beforeInteractive" />
    <Script src='./assets/js/popper.min.js' />
    <Script src='./assets/js/bootstrap.min.js' />
    {/* <Script src='./assets/js/owl.carousel.min.js' />
    <Script src='./assets/js/select2.min.js' />
    <Script src='./assets/js/jquery-3.5.1.min.js' ></Script>
    <Script src='./assets/js/popper.min.js' ></Script>
    <Script src='./assets/js/bootstrap.min.js' ></Script>
    <Script src='./assets/js/select2.min.js' ></Script>
    <Script src='./assets/js/jquery.magnific-popup.min.js'></Script>
    <Script src='./assets/js/custom.js' ></Script> */}
  </>
}
