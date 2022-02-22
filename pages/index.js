import Head from 'next/head'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
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
        <meta property="og:title" content="Archetype - Billing Infrastructure for APIs"key="ogtitle" />
        <meta property="og:description" content="We help companies monetize APIs and experiment with pricing models  by managing their billing infrastructure. Never worry about managing users' quotas and privileges." key="ogdesc" />

        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
        <meta name="description" content="We help companies monetize APIs and experiment with pricing models  by managing their billing infrastructure. Never worry about managing users' quotas and privileges." />
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
