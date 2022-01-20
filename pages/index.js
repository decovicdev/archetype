import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Features from '@components/Features'
import Steps from '@components/Steps'
import Hero from '@components/Hero'
import FAQS from '@components/FAQs'
import FooterCTA from '@components/FooterCTA'
import WeirdFeatureGrid from '@components/WeirdFeatureGrid'
import WaitlistModal from '@components/Modals/WaitlistModal'

export default function Home() {

  return (
    <div /*style={{backgroundColor: '#181A82'}}*/>
      <Head>
        <title>Archetype</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <Hero/>
      <Features/>
      <WeirdFeatureGrid/>
      <WaitlistModal/>
      <Steps/>
      {/*
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      */}
      <FAQS/>
      <FooterCTA/>
      <Footer />
    </div>
  )
}
