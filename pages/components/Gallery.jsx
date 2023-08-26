import React, { useState } from 'react';
import Image from 'next/image'
import { ArrowPathIcon, BoltIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

function Gallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const features = [
    {
      name: 'Auto Electrician.',
      description:
        "Delivering expert auto electrical solutions tailored to your vehicle's needs.",
      icon: BoltIcon,
    },
    {
      name: 'Auto Air Conditioning and Re-Gas & Repairs.',
      description:
        'Comprehensive auto air conditioning services, from re-gassing to intricate repairs ensuring optimal climate control.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Car sound accessories and installation.',
      description:
        'Professional installation of car sound accessories for an enhanced audio experience.',
      icon: SpeakerWaveIcon,
    },
    {
      name: 'Mine site Auto Sparky, specialised and contracting.',
      description:
        'Offering specialized electrical expertise for mine sites, from routine maintenance to contractual projects.',
      icon: WrenchScrewdriverIcon,
    },
  ]

  return (
    <div className="bg-white py-20 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className='md:items-center'>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">Our work.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-center">
                At Jestin Auto Electrics, our expertise spans a broad spectrum of auto electrical and mechanical services. Our work encapsulates 
                everything from specialized auto electrical installations for personal vehicles to comprehensive servicing of heavy mobile machinery. 
              </p>
              <dl className="pt-20 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="container flex flex-wrap mx-auto lg:pt-10">
              <div className="p-2 rounded lg:w-1/3 w-1/2 " onClick={() => openModal('/gallery/image3.jpg')}>
                <Image
                  src="/gallery/image3.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image20.jpg')}>
                <Image
                  src="/gallery/image20.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image10.jpg')}>
                <Image
                  src="/gallery/image10.jpg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image5.jpg')}>
                <Image
                  src="/gallery/image5.jpg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image18.jpg')}>
                <Image
                  src="/gallery/image18.jpg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image1.jpg')}>
                <Image
                  src="/gallery/image1.jpg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50 px-10
                transition-opacity duration-500 ${isModalOpen ? 'opacity-100' : 'opacity-0'}"
                style={isModalOpen ? {} : { pointerEvents: 'none' }}>
                  <div className="relative">
                    <img src={selectedImage} alt="Enlarged" className="object-contain" />
                    <button onClick={closeModal} className="absolute top-4 right-4 bg-white p-2 w-8 rounded-full drop-shadow-lg">x</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
