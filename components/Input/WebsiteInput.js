export default function WebsiteInput() {
    return (
      <div>
        <div className="flex justify-between">
        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
          Company Website
        </label>
        <span className="text-sm text-gray-500" id="email-optional">
          Optional
        </span>
      </div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">http://</span>
          </div>
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md"
            placeholder="www.example.com"
          />
        </div>
      </div>
    )
  }
  