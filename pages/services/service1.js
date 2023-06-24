import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Service1() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mobile Auto Electrics</h1>
        <p className="mt-6 text-xl leading-8">
        At Jestin Auto Electrics, we specialize in a wide range of services, ensuring your vehicles and machinery operate at peak performance. 
        Our expertise extends to specialized auto electrical and air conditioning installations, providing you with year-round comfort and reliability. 
        <br /><br />
        Our team excels in diagnosing and rectifying faults, adhering to strict mine site specifications to ensure safety and productivity. We also bring music to your journey with our sound system installation services. But that's not all - we expertly repair starters and alternators to keep your engines running smoothly. Trust us for comprehensive, top-tier electrical services in Perth.
        <br /><br />
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Diagnose, fault finding and mine site specification</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Sound system Installation</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Starter and Alternator Repair </strong>
              </span>
            </li>
          </ul>
        </div>
        <img
          src="https://img.freepik.com/free-photo/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance_146671-19691.jpg?w=1380&t=st=1687578530~exp=1687579130~hmac=d3ef9e86ce969806de0f04e00d2037861079fa80b502bc0c606156dbd0475d9b"
          alt=""
          className="inset-0 -z-10 h-full w-full object-cover brightness-[.80] mt-16"
        />
        <div className="mx-auto max-w-2xl pt-20">
          <div className="text-center">
            <p className="mt-6 text-xl leading-8 text-gray-900 font-medium">
              Are you interested? Let's get to work.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Contact us now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
