import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Features from '@components/Features'
import Steps from '@components/Steps'
import Hero from '@components/Hero'
import FAQS from '@components/FAQs'
import FooterCTA from '@components/FooterCTA'
import WeirdFeatureGrid from '@components/WeirdFeatureGrid'
import Divider from '@components/Layout/Divider'

export default function Home() {
  

  return (
    <div className="bg-fullscreencover bg-cover ">
      <Head>
        <title>Archetype</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
     
      <Hero/>
      <Features/>
      {/*<WeirdFeatureGrid/>*/}
      <Steps/>
      {/*<FAQS/>*/}
      <FooterCTA/>
      <Footer/>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-8PE8JSX9VB"
          height="0" width="0"></iframe>
        </noscript>
      </body>
      
    </div>
  )
}
