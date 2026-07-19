import type { Icon } from "@phosphor-icons/react";

export interface Doctor {
  nama: string;
  foto: string;
  spesialis?: string;
}

export interface JadwalPraktik {
  hari: string;
  jam: string;
}

export interface Poliklinik {
  slug: string;
  nama: string;
  icon: Icon;
  banner: string;
  deskripsi: string;
  layanan: string[];
  jadwal: JadwalPraktik[];
  kondisi: string[];
  doctors: Doctor[];
}