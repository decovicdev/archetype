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
import PlanComponent from '@components/PlanComponent'



export default function Pricing() {
  

  return (
    <div className="bg-fullscreencover bg-cover ">
      <Head>
        <title>Archetype</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <PlanComponent/>

      
    </div>
  )
}