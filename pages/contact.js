import Head from 'next/head'
import PlanComponent from '@components/PlanComponent'
import TypeformSurvey from '@components/TypeformSurvey'


export default function Contact() {
  return (
    <div className="bg-fullscreencover bg-cover ">
      <Head>
        <title>Archetype</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <TypeformSurvey/>
    </div>
  )
}
