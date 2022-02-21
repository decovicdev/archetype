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
        <meta name="twitter:card" content="Updates, memes and all things APIs and programming from Archetype" key="twcard" />
        <meta name="twitter:creator" content="GetArchetype" key="twhandle" />

        <meta property="og:url" content="https://archetype.dev" key="ogurl" />
        <meta property="og:site_name" content="Archetype" key="ogsitename" />
        <meta property="og:title" content="Archetype - API Monetization"key="ogtitle" />
        <meta property="og:description" content="Helping companies publish monetized APIs and create subscriptions, and manage users' quotas and access in minutes. Optimize your pricing models with dynamic pricing." key="ogdesc" />

        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
        <meta name="description" content="Helping companies publish monetized APIs and create subscriptions, and manage users' quotas and access in minutes. Optimize your pricing models with dynamic pricing." />
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
        <BottomCTA/>
        <Footer/>
      </div>
     
      
    </div>
  )
}
