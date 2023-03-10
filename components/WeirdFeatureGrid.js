/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

export default function WeirdFeatureGrid() {
  return (
    <div className="py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="row-span-2 bg-unusual-card-lg bg-cover px-8 py-3" key="Yo">
              <dt>
                <div className="flex items-center justify-center rounded-md text-white">
                  <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">"Test feature A "</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">em ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione</dd>
            </div>
            <div className="bg-unusual-card-lg px-8 py-3 space-y-10 lg:space-y-0">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">"Test feature B "</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">em ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione</dd>
            </div>
            <div className="bg-unusual-card-lg px-8 py-3 rounded-lg space-y-10 lg:space-y-0">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">"Test feature C"</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">em ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione</dd>
            </div>
        </dl>
      </div>
    </div>
  )
}
