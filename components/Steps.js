/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Sign up at Archetype',
    description:
      'Link Stripe Account and register an account.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Create a Plan',
    description:
      'Create a subscription plan and customize features and quota limits.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Integrate our SDKs',
    description:
      'Quickly set up our SDKs in your codebase.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Collect Payments',
    description:
      'Immediately accept payments and never worry about invoicing your users again.',
    icon: LightningBoltIcon,
  },
]

export default function Steps() {
  return (
    <div className="py-12 mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <p className="mt-2 text-left text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            How it works
          </p>
          <p className="mt-2 text-left pb-10 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Set up and deploy your API in minutes.
          </p>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="flex items-center justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                
              </dt>
              <p className="flex items-center justify-center mt-5 text-lg leading-6 font-medium text-gray-200">{feature.name}</p>
              <dd className=" text-center mt-2 text-base text-gray-400">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}