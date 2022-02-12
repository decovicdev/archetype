import Head from 'next/head'
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
