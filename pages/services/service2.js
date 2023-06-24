import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Service1() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mine Site Auto Electrical Repairs for Heavy Machinery</h1>
        <p className="mt-6 text-xl leading-8">
        We provide comprehensive electrical solutions tailored for heavy mobile plant and machinery, particularly those operating within demanding mine site 
        environments. Our team is proficient in executing critical repairs and regular service of both electrical components and air conditioning systems, 
        ensuring maximum uptime and worker comfort. 
        <br /><br />
        We also specialize in mine shutdown repairs, acting promptly to resolve issues and minimize operational downtime. 
        Choose Jestin Auto Electrics as your trusted partner in maintaining the efficiency and reliability of your heavy machinery and mobile plant equipment.
        <br /><br />
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Heavy machinery electrical and aircon servicing</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Mine-specific diagnostic and repair</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Quick, efficient mine shutdown repairs</strong>
              </span>
            </li>
          </ul>
        </div>
        <img
          src="https://img.freepik.com/free-photo/combine-machine-service-mechanic-repairing-motor-outdoors_146671-19072.jpg?w=1380&t=st=1687580025~exp=1687580625~hmac=80b0b45a48fe5bb50aa783efe65b3e20c265004a0d1d402cc818a86b41304776"
          alt=""
          className="inset-0 -z-10 h-full w-full object-cover brightness-[.80] mt-16"
        />
        <div className="mx-auto max-w-2xl pt-20">
          <div className="text-center">
            <p className="mt-6 text-xl leading-8 text-gray-900 font-medium">
              Get in touch with us for consultation.
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
