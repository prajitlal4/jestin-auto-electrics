import React, { useState } from 'react';
import Image from 'next/image'

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

  return (
    <div className="bg-white py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className='md:items-center'>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">Our work.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-center">
                At Jestin Auto Electrics, our expertise spans a broad spectrum of auto electrical and mechanical services. Our work encapsulates 
                everything from specialized auto electrical installations for personal vehicles to comprehensive servicing of heavy mobile machinery. 
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-center">
                Whether it&apos;s diagnosing and rectifying electrical faults or performing critical mine shutdown repairs, we&apos;re always quick and effective in our response.
              </p>
            </div>
            <div className="container flex flex-wrap mx-auto lg:pt-10">
              <div className="p-2 rounded lg:w-1/3 w-1/2 " onClick={() => openModal('/gallery/image13.jpg')}>
                <img
                  src="/gallery/image13.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image11.jpg')}>
                <img
                  src="/gallery/image11.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image10.jpg')}>
                <img
                  src="/gallery/image10.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image19.jpg')}>
                <img
                  src="/gallery/image19.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image18.jpg')}>
                <img
                  src="/gallery/image18.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem]  rounded-2xl bg-gray-50 object-cover hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 rounded lg:w-1/3 w-1/2" onClick={() => openModal('/gallery/image1.jpg')}>
                <img
                  src="/gallery/image1.jpg"
                  alt=""
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
