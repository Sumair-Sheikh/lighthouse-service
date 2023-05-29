import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Oxygen } from '@next/font/google'


const oxygen = Oxygen({ 
  weight: ['300', '400', '700'],
  preload: false,
  variable: '--oxygen-font'
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>

      <Header />

      <Component {...pageProps} />

      <Footer />

    </Layout>
  );
}
