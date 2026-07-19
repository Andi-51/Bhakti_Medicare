import { Card, CardContent } from "../ui/card"
import foto_profile from "@/assets/images/foto_profil.jpeg"


const About = () => {

  const teks = [
    {isi: "RS Bhakti Medicare adalah rumah sakit swasta tipe C yang didirikan dan beroperasional sejak tanggal 25 mei 2008."},
    {isi: "Berlokasi di daerah industri Sukabumi, RS Bhakti Medicare secara aktif memberikan pelayanan lengkap bagi masyarakat dan mitra."}
  ]

  return (
    <section className="bg-[url('@/assets/images/profile_bg.png')] bg-cover bg-center py-16" id="about">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-gray-600 font-extrabold text-center text-3xl md:text-4xl w-full">Profil <br /> Perusahaan</h1>
              <img src={foto_profile} className="w-[80%] rounded-lg"/>
            </div>
            <div className="flex flex-col w-[80%] gap-4 items-center justify-center mx-auto">
              {teks.map((kalimat) => (
                <Card className="text-sm md:text-md lg:text-lg bg-primary text-white" key={kalimat.isi}>
                <CardContent>{kalimat.isi}</CardContent>
              </Card>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default About