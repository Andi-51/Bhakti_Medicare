import type { Doctor } from "@/types/poliklinik";
import DoctorCard from "./DoctorCard";

interface DoctorGridProps {
  doctors: Doctor[];
}

const DoctorGrid = ({ doctors }: DoctorGridProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-700">
        Dokter Kami
      </h2>

      <div className="flex flex-wrap justify-center gap-8">

        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.nama}
            doctor={doctor}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorGrid;