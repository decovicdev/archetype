import Head from 'next/head'
import HeroTwo from '@components/LandingPage/HeroTwo'
import EmailEntry from '@components/EmailEntry'
import BigImage from '@components/LandingPage/BigImage'


export default function Home() {
  

  return (
    <div className="bg-fullscreencover bg-cover ">
      <Head>

      </Head>
        <body>
        <HeroTwo/>
      <BigImage/>

      <EmailEntry/>
      
        </body>
      
    </div>
  )
}
