import type { JadwalPraktik } from "@/types/poliklinik";

interface ScheduleTableProps {
  jadwal: JadwalPraktik[];
}

const ScheduleTable = ({ jadwal }: ScheduleTableProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-700">
        Jadwal Praktik
      </h2>

      <div className="overflow-hidden rounded-xl border shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-4 text-center">Hari</th>
              <th className="py-4 text-center">Jam Praktik</th>
            </tr>
          </thead>

          <tbody>
            {jadwal.map((item, index) => (
              <tr
                key={item.hari}
                className={index % 2 === 0 ? "bg-white" : "bg-cyan-50"}
              >
                <td className="border-t px-6 py-4 text-center font-medium">
                  {item.hari}
                </td>

                <td className="border-t px-6 py-4 text-center text-gray-600">
                  {item.jam}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ScheduleTable;