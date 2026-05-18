'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideo01Props {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo01({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideo01Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="shrink-0" data-aos="fade-left">

      {/* Video thumbnail */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
        </div>
        <button className="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
          <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
            <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
          </svg>
        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center justify-center">
              <Dialog.Panel
                className="relative bg-black overflow-hidden max-h-screen"
                style={{
                  aspectRatio: `${videoWidth} / ${videoHeight}`,
                  width: videoHeight > videoWidth
                    ? `min(100%, calc(100dvh * ${videoWidth / videoHeight}))`
                    : '100%',
                }}
              >
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls className="w-full h-full">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black bg-opacity-60 text-white hover:bg-opacity-90 transition"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close video"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293A1 1 0 01.293 14.293L6.586 8 .293 1.707A1 1 0 01.293.293z" />
                  </svg>
                </button>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}