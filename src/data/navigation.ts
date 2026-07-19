import { poliklinik } from "./poliklinik";

export interface NavSubItem {
  name: string;
  href: string;
  /** 'route' = React Router Link, 'hash' = smooth scroll to homepage section */
  type: "route" | "hash";
}

export interface NavGroup {
  title: string;
  subs: NavSubItem[];
}


/**
 * Shared navigation data used by both desktop and mobile navbars.
 */
export const navGroups: NavGroup[] = [
  {
    title: "poliklinik",
    subs: poliklinik.map((p) => ({
      name: p.nama.replace(/^poliklinik\s*/i, ""),
      href: `/poli/${p.slug}`,
      type: "route" as const,
    })),
  },
  // {
  //   title: "promo & paket mcu",
  //   subs: [{ name: "Promo & Paket", href: "#", type: "hash" as const }],
  // },
  {
    title: "informasi",
    subs: [
      {
        name: "Dokter yang Tersedia",
        href: "/listDokter",
        type: "route" as const,
      },
    ],
  },
];
