import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Service3() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Specialized in Heavy Mechanical Mobile Repairs </h1>
        <p className="mt-6 text-xl leading-8">
        Jestin Auto Electrics stands out for its specialization in heavy mechanical mobile repairs. We understand that in industries like construction, 
        mining, and transport, downtime equals lost revenue. That&apos;s why we have dedicated our expertise to deliver rapid, effective repairs for all 
        types of heavy mobile machinery. 
        <br /><br />
        Our team of experienced technicians can handle a wide array of mechanical issues, ensuring your heavy machinery is back in operation as quickly as possible.
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Rapid response and repair for heavy mobile machinery</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Wide array of mechanical repair services</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Experienced technicians ensuring minimal downtime</strong>
              </span>
            </li>
          </ul>
        </div>
        <img
          src="https://img.freepik.com/free-photo/combine-machine-service_146671-19097.jpg?w=1380&t=st=1687582258~exp=1687582858~hmac=d565d77936b886d4fe4977a038cde017f521781d571222c8baccfd15576e908f"
          alt=""
          className="inset-0 -z-10 h-full w-full object-cover brightness-[.80] mt-16"
        />
        <div className="mx-auto max-w-2xl pt-20">
          <div className="text-center">
            <p className="mt-6 text-xl leading-8 text-gray-900 font-medium">
              Give us a call or message and get started.
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
