import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  return (
    <div className="bg-white">
      <Head>
        <title>Jestin Auto Electrics Perth</title>
        <meta name="description" content="Perths trusted Auto Electrical Company - for all your installations and repairs." />
        <meta property="og:title" content="Jestin Auto Electrics Perth" />
        <meta
          property="og:description"
          content="Perths trusted Auto Electrical Company - for all your installation and repairs."
        />
      </Head>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Image
          src="/HeroImage.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.75]"
          width={1920}
          height={1080}
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl pb-5 drop-shadow-md">
              Perth&apos;s trusted Auto Electrical company
            </h1>
            <p className="mt-6 text-lg leading-8 text-white font-medium drop-shadow-md">
              Powering Perth&apos;s vehicles and heavy machinery with expert service and care.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#contact"
                className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
