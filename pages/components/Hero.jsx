import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <img
          src="https://img.freepik.com/free-photo/harvesters-combine-parts-plant-are-waiting-sales_146671-19363.jpg?w=1380&t=st=1687576967~exp=1687577567~hmac=c8283da64bacca3e7a361bcd1d9f770d3d8479b0b360e79ab04c8e1c4626af6c"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.25]"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl pb-5">
              Perth&apos;s trusted Auto Electrical company
            </h1>
            <p className="mt-6 text-lg leading-8 text-white font-medium">
              Powering Perth's vehicles and heavy machinery with expert service and care.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#contact"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
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
