/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
    { name: 'SSL Certificates', icon: LockClosedIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
    { name: 'Simple Queues', icon: RefreshIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."},
    { name: 'Advanced Security', icon: ShieldCheckIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
    { name: 'Powerful API', icon: CogIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
    { name: 'Database Backups', icon: ServerIcon, text: " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
  ]
  
  export default function Features() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className=" mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base text-left font-semibold tracking-wider text-indigo-600 uppercase">Launch faster</h2>
          <p className="mt-2 text-left text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Why use Archetype?
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <img src="commerce_icon.png" className="h-24 w-24 -translate-y-4 text-white p-0 inline-flex items-center justify-center rounded-md" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                       {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }