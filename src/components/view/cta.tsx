import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Phone, CalendarCheck, HeartPulse } from "lucide-react"

const Cta = () => {
  return (
    <section id="cta" className="max-w-6xl mx-auto w-[95%] py-20 md:py-32">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-[0_20px_50px_-12px_rgba(8,145,178,0.5)]">
        
        {/* Glow Effects & Patterns */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-cyan-400 rounded-full blur-[80px] opacity-60 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-400 rounded-full blur-[80px] opacity-50 mix-blend-screen pointer-events-none"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
          <Badge variant="outline" className="text-cyan-50 border-cyan-200/30 bg-white/10 backdrop-blur-md mb-8 px-4 py-1.5 text-xs sm:text-sm uppercase tracking-wider rounded-full [&>svg]:size-4">
            <HeartPulse className="mr-2 inline-block text-cyan-300" />
            Layanan Gawat Darurat 24 Jam
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Kesehatan Anda, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">
              Prioritas Utama Kami.
            </span>
          </h2>
          
          <p className="text-cyan-50 text-lg md:text-xl max-w-2xl mb-10 font-medium leading-relaxed">
            Dapatkan penanganan medis yang cepat, tepat, dan profesional. Tim dokter spesialis kami siap memberikan layanan terbaik untuk Anda dan keluarga.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button size="lg" className="rounded-full h-14 px-8 text-base md:text-lg font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] bg-white text-blue-700 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <CalendarCheck className="w-5 h-5 md:w-6 md:h-6" />
              Buat Janji Temu
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base md:text-lg font-bold border-cyan-200/40 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:text-white hover:border-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Hubungi IGD
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta