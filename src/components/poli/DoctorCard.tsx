import type { Doctor } from "@/types/poliklinik";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
      <img
        src={doctor.foto}
        alt={doctor.nama}
        className="h-56 w-full rounded-2xl object-cover object-top shadow-md"
      />

      <div className="-mt-4 w-[90%] rounded-2xl border-2 border-primary bg-white px-4 py-3 text-center shadow">
        <h3 className="text-sm font-semibold leading-5">
          {doctor.nama}
        </h3>

        {doctor.spesialis && (
          <p className="mt-1 text-xs text-gray-500">
            {doctor.spesialis}
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;