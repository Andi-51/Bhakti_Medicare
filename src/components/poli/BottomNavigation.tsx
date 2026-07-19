import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Poliklinik } from "@/types/poliklinik";

interface BottomNavigationProps {
  prev: Poliklinik;
  next: Poliklinik;
}

const BottomNavigation = ({ prev, next }: BottomNavigationProps) => {
  return (
    <div className="mt-20 flex flex-col gap-4 md:flex-row md:justify-between">
      <Link
        to={`/poli/${prev.slug}`}
        className="flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-white"
      >
        <ArrowLeft size={18} />
        {prev.nama}
      </Link>

      <Link
        to={`/poli/${next.slug}`}
        className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition hover:opacity-90"
      >
        {next.nama}
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default BottomNavigation;