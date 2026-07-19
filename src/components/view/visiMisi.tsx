import foto_visiMisi from '@/assets/images/foto_visiMisi.png'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'


const VisiMisi = () => {
  return (
    <section className="bg-[url('@/assets/images/visiMisi_bg.png')] bg-cover bg-center py-16" id="visiMisi">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col-reverse md:flex-col gap-4 items-center">
            <img src={foto_visiMisi} alt="img" className="w-[80%] rounded-md" />
            <h1 className="text-white font-bold text-3xl md:text-4xl">Visi & Misi</h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Card className="w-[80%] h-fit text-gray-600">
              <CardHeader>
                <CardTitle className='text-xl md:text-2xl font-bold'>VISI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Menjadi rumah sakit terpercaya, inovatif, dengan keunggulan pada mutu pelayanan yang berbasis pada ilmu pengetahuan dan teknologi kedokteran terkini serta sumber daya manusia yang amanah dan profesional.</p>
              </CardContent>
            </Card>
            <Card className="w-[80%] h-fit text-gray-600">
              <CardHeader>
                <CardTitle className='text-xl md:text-2xl font-bold'>MISI</CardTitle>
              </CardHeader>
              <CardContent className=''>
                <ul className="list-disc list-outside space-y-2 mx-2 text-sm">
                  <li>
                    <p className=''>Menyediakan jasa layanan kegawat daruratan, kesehatan rawat jalan, rawat inap, dan penunjangan medis yang didukung oleh tenaga kerja yang profesional.</p>
                  </li>
                  <li>
                    <p className=''>Memberikan jasa layanan yang aman (secure) dan nyaman (convenience) pada seluruh pasien tanpa membedakan kelas, suku, ras, dan agama.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default VisiMisi