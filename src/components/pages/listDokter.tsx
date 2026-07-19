import { poliklinik } from '@/data/poliklinik';
import DoctorCard from '../poli/DoctorCard';

const ListDokter = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h1 className="font-bold text-3xl md:text-4xl text-center text-gray-700">
          DAFTAR DOKTER KAMI
        </h1>

        {poliklinik.map((poli) => (
          <div key={poli.slug} className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-600">
              {poli.nama}
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {poli.doctors.map((doctor) => (
                <DoctorCard key={doctor.nama} doctor={doctor} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListDokter;