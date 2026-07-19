import { useParams } from "react-router-dom";
import { poliklinik } from "@/data/poliklinik";
import PoliHero from "@/components/poli/PoliHero";
import ServiceList from "@/components/poli/ServiceList";
import ScheduleTable from "@/components/poli/ScheduleTable";
import ConditionList from "@/components/poli/ConditionList";
import DoctorGrid from "@/components/poli/DoctorGrid";
// import BottomNavigation from "@/components/poli/BottomNavigation";

const DetailPoli = () => {
  const { slug } = useParams();

  const index = poliklinik.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-3xl font-bold">
          Poliklinik tidak ditemukan.
        </h1>
      </section>
    );
  }

  const poli = poliklinik[index];

//   const prev =
//     poliklinik[
//       (index - 1 + poliklinik.length) %
//         poliklinik.length
//     ];

//   const next =
//     poliklinik[
//       (index + 1) %
//         poliklinik.length
//     ];

  return (
    <main className="space-y-20 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <PoliHero poli={poli} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <ServiceList layanan={poli.layanan} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <ScheduleTable jadwal={poli.jadwal} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <ConditionList kondisi={poli.kondisi} />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <DoctorGrid doctors={poli.doctors} />
      </div>

      {/* <div className="mx-auto max-w-6xl px-6">
        <BottomNavigation prev={prev} next={next} />
      </div> */}
    </main>
  );
};

export default DetailPoli;