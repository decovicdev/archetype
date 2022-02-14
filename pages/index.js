import Head from 'next/head'
import Footer from '@components/Footer'
import Features from '@components/Features'
import Steps from '@components/Steps'
import Hero from '@components/Hero'
import FooterCTA from '@components/FooterCTA'
import SideBySideFeatures from '@components/LandingPage/SideBySideFeatures'
import BottomCTA from '@components/LandingPage/BottomCTA'
export default function Home() {
  

  return (
    <div className="">
      <Head>
        <title>Archetype</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8PE8JSX9VB"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8PE8JSX9VB', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <Hero/>
      <div className="bg-fullscreencover bg-cover">
        <Features/>
        <Steps/>
      </div>
     
      <BottomCTA/>
      <Footer/>
    </div>
  )
}
