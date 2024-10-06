import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { ArrowPathIcon, BoltIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

function Gallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/gallery/image3.jpg',
    '/gallery/image20.jpg',
    '/gallery/image10.jpg',
    '/gallery/image5.jpg',
    '/gallery/image18.jpg',
    '/gallery/image1.jpg',
    '/gallery/image_new_1.jpg',
  '/gallery/image_new_2.jpg',
  '/gallery/image_new_3.jpg',
  '/gallery/image_new_4.jpg',
  '/gallery/image_new_5.jpg',
  '/gallery/image_new_6.jpg',
  '/gallery/image_new_7.jpg',
  '/gallery/image_new_8.jpg',
  '/gallery/image_new_9.jpg',
  '/gallery/image_new_10.jpg',
  '/gallery/image_new_11.jpg',
  '/gallery/image_new_12.jpg',
  '/gallery/image_new_13.jpg',
  '/gallery/image_new_14.jpg',
  '/gallery/image_new_15.jpg',
  '/gallery/image_new_16.jpg'
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
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
            <div className="container flex flex-wrap flex-col mx-auto lg:pt-10">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                className="aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover cursor-pointer"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots - Centered under the images */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50 px-10 transition-opacity duration-500 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
          style={isModalOpen ? {} : { pointerEvents: 'none' }}>
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full object-contain" />
            <button onClick={closeModal} className="absolute top-4 right-4 bg-white text-gray-600 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
