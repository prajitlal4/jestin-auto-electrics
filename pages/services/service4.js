import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Service4() {
  return (
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Specialized Welder/Boilermaker</h1>
        <p className="mt-6 text-xl leading-8">
          We also excel in providing specialized welder and boilermaker services. Our professionals masterfully handle MIG, TIG, and stick welding processes, 
          working with various materials such as aluminum, stainless steel, and cast iron. 
          <br /><br />
          From intricate fabrications to heavy-duty structural work, we deploy precise welding techniques and boilermaking skills to meet your specific needs. 
          Our work is guided by stringent safety standards and a commitment to durable, high-quality outcomes.
          <br /><br />
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Expertise in MIG, TIG, and stick welding for a variety of materials</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Skilled fabrication and heavy-duty structural work</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Adherence to high safety standards and commitment to quality</strong>
              </span>
            </li>
          </ul>
        </div>
        <Image
          src="/ServiceFour.jpg"
          alt=""
          className="inset-0 -z-10 h-full w-full object-cover brightness-[.80] mt-16"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="mx-auto max-w-2xl pt-20">
          <div className="text-center">
            <p className="mt-6 text-xl leading-8 text-gray-900 font-medium">
              Need our skills? Get in touch now.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
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
