import FotoHero from "@/assets/images/foto_hero.png"


const Hero = () => {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-[40%_60%] h-screen '>
        <div className="bg-background hidden md:flex items-end justify-center h-full overflow-hidden pt-16">
          <img src={FotoHero} alt="Hero" className="w-[90%] max-h-full object-contain object-bottom" />
        </div>
        <div className="bg-[url('@/assets/images/foto_lobby_utama.webp')] bg-cover bg-center relative h-full">
          <div className="bg-gradient-to-r from-[#e3f0f3] from-0% via-background/[60%] via-[60%] to-transparent to-[100%] z-10 absolute inset-0 flex justify-center flex-col">
            <div className="px-4">
              <h1 className="font-extrabold text-gray-600 text-3xl md:text-4xl lg:text-5xl w-[75%] md:w-[50%]">Rumah Sakit Bhakti Medicare</h1>
              <h2 className="font-extrabold text-cyan-400 text-3xl md:text-4xl lg:text-5xl w-[75%] md:w-[50%]">Melayani dengan sepenuh hati.</h2>
              <p className="text-black text-sm w-[60%] my-4">Dengan mengutamakan mutu pelayanan dan keselamatan pasien, Rumah Sakit Bhakti Medicare siap menjadi mitra kesehatan keluarga melalui layanan yang profesional, nyaman, dan terpercaya.</p>
              {/* <a href="#cta">
                <Button className="w-40 h-10 rounded-full text-md md:text-lg">Selengkapnya</Button>
              </a> */}
            </div>
            
            
          </div>
        </div>
    </section>
  )
}

export default Hero