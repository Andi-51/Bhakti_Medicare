// import React from 'react'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

// import video_pkl from "@/assets/videos/video_pkl.mp4"
import video_compro from "@/assets/videos/video_compro.mp4"

const Videos = () => {


  return (
    <section className='max-w-6xl w-[95%] mx-auto py-16 flex flex-col gap-4'>
        <h1 className='text-center font-bold text-3xl md:text-4xl'>Video <br className="md:hidden"/>Company Profile</h1>
        <video src={video_compro} controls preload='metadata'></video>
    </section>
  )
}

export default Videos