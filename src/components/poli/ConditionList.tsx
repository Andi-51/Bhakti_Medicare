interface ConditionListProps {
  kondisi: string[];
}

const ConditionList = ({ kondisi }: ConditionListProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-700">
        Kondisi yang Ditangani
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {kondisi.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConditionList;