import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { poliklinik } from "@/data/poliklinik";
import { Baby, Bone, Brain, Eye, Heartbeat, Monitor, Scissors, Stethoscope, Syringe, Tooth, Wind, Wheelchair, Drop } from "@phosphor-icons/react";

const basePoli = [
  { nama: "GIGI", icon: Tooth },
  { nama: "BEDAH UMUM", icon: Scissors },
  { nama: "ANAK", icon: Baby },
  { nama: "PENYAKIT DALAM", icon: Stethoscope },
  { nama: "OBGYN", icon: Heartbeat },
  { nama: "RADIOLOGI", icon: Monitor },
  { nama: "ANESTESI", icon: Syringe },
  { nama: "PARU", icon: Wind },
  { nama: "SYARAF", icon: Brain },
  { nama: "THT-KL", icon: Stethoscope },
  { nama: "KONSERVASI GIGI", icon: Tooth },
  { nama: "JIWA", icon: Brain },
  { nama: "BEDAH SYARAF", icon: Brain },
  { nama: "MATA", icon: Eye },
  { nama: "KULIT KELAMIN", icon: Drop },
  { nama: "UROLOGI", icon: Drop },
  { nama: "ORTOPEDI", icon: Bone },
  { nama: "JANTUNG", icon: Heartbeat },
  { nama: "REHAB MEDIK", icon: Wheelchair },
  { nama: "FISIOTERAPI", icon: Wheelchair },
];

const poli = basePoli.map((item) => {
  const found = poliklinik.find(
    (p) =>
      p.nama.toLowerCase().includes(item.nama.toLowerCase()) ||
      item.nama.toLowerCase().includes(p.nama.toLowerCase())
  );
  return {
    ...item,
    slug: found
      ? found.slug
      : item.nama
          .toLowerCase()
          .replace(/\s*&\s*/g, "-")
          .replace(/\s*-\s*/g, "-")
          .replace(/\s+/g, "-"),
  };
});

const Poliklinik = () => {
  return (
    <section className="bg-[url('@/assets/images/poliklinik_bg.png')] bg-cover py-16" id="poliklinik">
  <div className="max-w-6xl mx-auto px-6 space-y-16">

    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-gray-700">
          Poliklinik Kami
        </h1>

        <p className="max-w-xs text-gray-600">
          Tim dokter kami siap memberikan pelayanan terbaik untuk anda dan keluarga.
        </p>

        <Link to="/listDokter">
          <Button className="w-fit rounded-full px-6 py-6 text-sm">
            Lihat Semua Dokter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
      {poli.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.nama}
            to={`/poli/${item.slug}`}
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white transition-all duration-200 group-hover:scale-105 group-hover:bg-cyan-600">
              <Icon size={34} weight="regular" />
            </div>

            <p className="text-center text-sm font-semibold leading-4 text-gray-700">
              {item.nama}
            </p>
          </Link>
        );
      })}
    </div>

  </div>
</section>
  );
};

export default Poliklinik;