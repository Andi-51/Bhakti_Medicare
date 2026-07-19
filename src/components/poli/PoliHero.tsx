import type { Poliklinik } from "@/types/poliklinik";

interface PoliHeroProps {
  poli: Poliklinik;
}

const PoliHero = ({ poli }: PoliHeroProps) => {
  const Icon = poli.icon;

  return (
    <section className="grid gap-10 lg:grid-cols-2 items-center">
      <img
        src={poli.banner}
        alt={poli.nama}
        className="h-[350px] w-full rounded-2xl object-cover shadow-lg"
      />

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
            <Icon size={34} weight="duotone" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Poliklinik
            </p>

            <h1 className="text-4xl font-bold text-gray-700">
              {poli.nama}
            </h1>
          </div>
        </div>

        <p className="leading-8 text-gray-600">
          {poli.deskripsi}
        </p>
      </div>
    </section>
  );
};

export default PoliHero;