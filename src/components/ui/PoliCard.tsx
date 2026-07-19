type PoliCardProps = {
  icon: React.ReactNode;
  title: string;
};

export function PoliCard({ icon, title }: PoliCardProps) {
  return (
    <button
      className="
        group
        flex flex-col items-center gap-2
        w-24
        transition-transform duration-200
        hover:-translate-y-1
      "
    >
      <div
        className="
          flex h-16 w-16 items-center justify-center
          rounded-full
          bg-cyan-500
          text-white
          transition-colors
          group-hover:bg-cyan-600
        "
      >
        {icon}
      </div>

      <span className="text-center text-sm font-semibold leading-4 text-gray-700">
        {title}
      </span>
    </button>
  );
}