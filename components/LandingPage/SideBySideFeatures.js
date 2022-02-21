/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon, CogIcon, ChipIcon, CodeIcon } from '@heroicons/react/outline'

export default function SideBySideFeatures() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to monetize your API
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            
          </p>
        </div>

        <div className="relative bg-gray-50 pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-regal-blue">
                  <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Integrate In Minutes
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Archetype integrates painlessly with your existing tech stack and enables no-code adjustments to pricing, bundles, and packaging.
                </p>
                <p className="mt-4 text-lg text-gray-500">Never worry about managing billing, invoicing, API keys, quotas, or permissions.</p>
                <p className="mt-4 text-lg text-gray-500">Save your engineers months of setup and maintennace so they can focus on delivering amazing products.</p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-regal-blue hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className=" lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="abstract1.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-regal-blue">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Easily Create Complex Billing Models
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Use the dashboard to create subscriptions, adjust prices and gate access to premium endpoints. No redeployments required. 
                </p>
                <p className="mt-4 text-lg text-gray-500"> Adjust quotas, metered limits and more without rearchitecting billing or rewriting code.</p>
                  <p className="mt-4 text-lg text-gray-500"> Switch between subscription or usage-based models in seconds. </p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-regal-blue hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className=" md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="abstract2.png"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-regal-blue">
                  <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Automatically Optimize Pricing Models
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Leverage our insights into usage, conversion, retention and cohort segmentation to improve your product and pricing.
                </p>
                <p className="mt-4 text-lg text-gray-500"> Experiment with pricing models with our dynamic pricing system.</p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-regal-blue hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className=" md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="abstract3.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
