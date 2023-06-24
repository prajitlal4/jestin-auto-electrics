import { ArrowPathIcon, StarIcon, FaceSmileIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'One-Stop Solution for All Your Needs',
    description:
      "Your time is valuable. That's why we offer a wide array of tailored, high-quality services under one roof. Simplify your tasks, and trust in our commitment to meet all your unique needs in an efficient, comprehensive manner.",
    icon: StarIcon,
  },
  {
    name: 'AutoElectrical Service with a Smile',
    description:
    "Dealing with AutoElectrical issues doesn't need to be stressful. Our skilled team delivers expert solutions with a smile, ensuring your AutoElectrical needs are met with warm, approachable, and knowledgeable service.",
    icon: FaceSmileIcon,
  },
  {
    name: 'Comprehensive Service, Single Company',
    description:
    "Whether it's maintenance, repairs, or consultations, we've got you covered. We're your single, reliable source for all-around, efficient service. Trust in our commitment to your satisfaction, as we strive to be the company that fulfills all your service needs.",
    icon: ArrowPathIcon,
  },
]

export default function Feature() {
  return (
    <div id="feature" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From family cars to heavy machinery, we do it all.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand that reliable operation of your vehicles and machinery is vital, whether you&apos;re navigating city streets or managing a busy mine site. Our skilled team is equipped with advanced technology to handle auto electrical issues across a diverse range of equipment - cars, heavy machinery, mine site equipment, and more.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-yellow-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
