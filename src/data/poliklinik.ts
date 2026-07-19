import { Baby, Bone, Brain, Drop, Eye, Heartbeat, Monitor, Scissors, Stethoscope, Syringe, Tooth, Wheelchair, Wind } from "@phosphor-icons/react";
import bannerGigi from "@/assets/images/banner/gigi.png";
import bannerBedahUmum from "@/assets/images/banner/bedah_umum.png";
import bannerAnak from "@/assets/images/banner/Anak.png";
import bannerParu from "@/assets/images/banner/Paru.png";
import bannerAnestesi from "@/assets/images/banner/anestesi.png";
import bannerJantung from "@/assets/images/banner/jantung.png";
import bannerKonservasiGigi from "@/assets/images/banner/konservasi_gigi.png";
import bannerMata from "@/assets/images/banner/mata.png";
import bannerObgyn from "@/assets/images/banner/obgyn.png";
import bannerPenyakitDalam from "@/assets/images/banner/penyakit_dalam.png";
import bannerSyaraf from "@/assets/images/banner/syaraf.png";
import bannerTht from "@/assets/images/banner/tht.png";
import bannerBedahSyaraf from "@/assets/images/banner/bedah_syaraf.png";
import bannerKejiwaan from "@/assets/images/banner/kejiwaan.png"
import bannerKulitKelamin from "@/assets/images/banner/kulitKelamin.png"
import bannerOrthopedi from "@/assets/images/banner/orthopedi.png"
import bannerRadiologi from "@/assets/images/banner/radiologi.png"
import bannerRehabMedik from "@/assets/images/banner/rehabMedik.png"
import bannerUrologi from "@/assets/images/banner/urologi.png"

import dokter_lina from "@/assets/images/dokter/dokter_lina.png";
import dokter_agi from "@/assets/images/dokter/dokter_agi.jpeg";
import dokter_alvy from "@/assets/images/dokter/dokter_alvy.jpg";
import dokter_andie from "@/assets/images/dokter/dokter_andie.jpeg";
import dokter_ardi from "@/assets/images/dokter/dokter_ardi.png"
import dokter_ayu from "@/assets/images/dokter/dokter_ayu.jpeg";
import dokter_bambang from "@/assets/images/dokter/dokter_bambang.jpeg";
import dokter_basofi from "@/assets/images/dokter/dokter_basofi.jpeg";
import dokter_benben from "@/assets/images/dokter/dokter_benben.jpeg";
import dokter_corintje from "@/assets/images/dokter/dokter_corintje.jpeg";
import dokter_dedy from "@/assets/images/dokter/dokter_dedy.jpeg";
import dokter_dwi from "@/assets/images/dokter/dokter_dwi.jpeg";
import dokter_edwin from "@/assets/images/dokter/dokter_edwin.jpeg";
import dokter_emilda from "@/assets/images/dokter/dokter_emilda.jpeg";
import dokter_endang from "@/assets/images/dokter/dokter_endang.jpeg";
import dokter_fajar from "@/assets/images/dokter/dokter_fajar.jpeg";
import dokter_febbie from "@/assets/images/dokter/dokter_febbie.jpeg";
import dokter_febianto from "@/assets/images/dokter/dokter_febianto.jpeg";
import dokter_fitria from "@/assets/images/dokter/dokter_fitria.jpeg";
import dokter_halim from "@/assets/images/dokter/dokter_halim.jpeg";
import dokter_linda from "@/assets/images/dokter/dokter_linda.jpeg";
import dokter_lukman from "@/assets/images/dokter/dokter_lukman.jpeg";
import dokter_lukmanul from "@/assets/images/dokter/dokter_lukmanul.jpeg";
import dokter_mirwan from "@/assets/images/dokter/dokter_mirwan.jpeg";
import dokter_mukhlis from "@/assets/images/dokter/dokter_mukhlis.jpeg";
import dokter_nyiemas from "@/assets/images/dokter/dokter_nyiemas.jpeg";
import dokter_pramusinto from "@/assets/images/dokter/dokter_pramusinto.jpeg";
import dokter_raden from "@/assets/images/dokter/dokter_raden.jpeg";
import dokter_rahmini from "@/assets/images/dokter/dokter_rahmini.png";
import dokter_renaldi from "@/assets/images/dokter/dokter_renaldi.jpeg";
import dokter_rivan from "@/assets/images/dokter/dokter_rivan.jpeg";
import dokter_rosilah from "@/assets/images/dokter/dokter_rosilah.jpeg";
import dokter_sindy from "@/assets/images/dokter/dokter_sindy.jpeg";
import dokter_syariffudin from "@/assets/images/dokter/dokter_syariffudin.jpeg";
import dokter_tonny from "@/assets/images/dokter/dokter_tonny.jpeg";
import dokter_wargian from "@/assets/images/dokter/dokter_wargian.jpg";
import dokter_widya from "@/assets/images/dokter/dokter_widya.jpeg";
import dokter_yoga from "@/assets/images/dokter/dokter_yoga.jpeg";
import dokter_yulia from "@/assets/images/dokter/dokter_yulia.jpeg";
import dokter_yuliati from "@/assets/images/dokter/dokter_yuliati.jpeg";
import dokter_yolly from "@/assets/images/dokter/dokter_yolly.jpeg";

import type { Poliklinik } from "@/types/poliklinik";


export const poliklinik: Poliklinik[] = [
  {
    slug: "gigi",

    nama: "Poliklinik Gigi",

    icon: Tooth,

    banner: bannerGigi,

    deskripsi:
      "Poliklinik Gigi melayani pemeriksaan, perawatan, dan pencegahan berbagai penyakit pada gigi dan rongga mulut dengan tenaga medis profesional dan peralatan modern.",

    layanan: [
      "Pemeriksaan Gigi",
      "Konsultasi Gigi",
      "Penambalan Gigi",
      "Pencabutan Gigi",
      "Scaling (Pembersihan Karang Gigi)",
      "Perawatan Gigi Berlubang",
      "Edukasi Kesehatan Gigi dan Mulut",
      "Rujukan ke Dokter Gigi Spesialis jika diperlukan",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "10.00 - 15.00",
      },
      {
        hari: "Selasa",
        jam: "17.00 - 19.00",
      },
      {
        hari: "Rabu",
        jam: "07.00 - 10.00",
      },
      {
        hari: "Kamis",
        jam: "15.00 - 17.00",
      },
      {
        hari: "Jumat",
        jam: "17.00 - 20.00",
      },
      {
        hari: "Sabtu",
        jam: "07.00 - 10.00",
      },
    ],

    kondisi: [
      "Gigi Berlubang",
      "Nyeri Gigi",
      "Gusi Bengkak atau Berdarah",
      "Karang Gigi",
      "Gigi Sensitif",
      "Gigi Patah atau Retak",
      "Bau Mulut (Halitosis)",
      "Sariawan dan Kelainan Rongga Mulut",
      "Gigi Goyang",
      "Infeksi Gigi dan Gusi",
      "Pemeriksaan Kesehatan Gigi Rutin",
      "Edukasi dan Pencegahan Penyakit Gigi dan Mulut",
    ],

    doctors: [
      {
        nama: "drg. Lina Karislina",
        foto: dokter_lina,
      },
      {
        nama: "drg. Cornintje",
        foto: dokter_corintje,
      },
      {
        nama: "drg. Muhammad Basofi",
        foto: dokter_basofi,
      },
      {
        nama: "drg. Febbie Nawawi",
        foto: dokter_febbie,
      },
    ],
  },

  {
    slug: "bedah-umum",

    nama: "Poliklinik Bedah Umum",

    icon: Scissors,

    banner: bannerBedahUmum,

    deskripsi:
      "Poliklinik Bedah Umum melayani konsultasi, pemeriksaan, diagonisis, serta tindakan operasi untuk berbagai penyakit dan kelainan yang memerlukan penanganan bedah. Didukung oleh dokter spesialis bedah yang berpengalaman serta fasilitas yang medis yang memadai, kami berkomitmen mmeberikan pelayanan yang aman, profesional, dan berkualitas.",

    layanan: [
      "Konsultasi Bedah",
      "Pemeriksaan dan Diagnosis",
      "Operasi Minor",
      "Operasi Mayor",
      "Perawatan Luka Operasi",
      "Kontrol Pasca Operasi",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "11.00 - 18.00",
      },
      {
        hari: "Selasa",
        jam: "14.00 - 17.00",
      },
      {
        hari: "Rabu",
        jam: "09.00 - 18.00",
      },
      {
        hari: "Kamis",
        jam: "11.00 - 18.00",
      },
      {
        hari: "Jumat",
        jam: "15.30 - 18.00",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 14.00",
      },
    ],

    kondisi: [
      "Hernia",
      "Benjolan/Lipoma",
      "Kista",
      "Wasir (Hermoid)",
      "Apendisitis (Usus Buntu)",
      "Batu Empedu",
      "Luka Yang Memerlukan Tindakan Bedah",
      "Tumor Jinak",
      "Abses",
      "Abses",
      "Trauma Ringan",
    ],

    doctors: [
      {
        nama: "dr. Linda Ivana. Sp.B",
        foto: dokter_linda,
      },
      {
        nama: "dr. Febianto Ary. Sp.B FINACS",
        foto: dokter_febianto,
      },
      {
        nama: "dr. Lukman Nurfauzi. Sp.B",
        foto: dokter_lukman,
      },
    ],
  },

  {
    slug: "anak",

    nama: "Poliklinik Anak",

    icon: Baby,

    banner: bannerAnak,

    deskripsi:

    "Poliklinik Anak melayani pemeriksaan kesehatan, diagonsis, pengobatan, serta pemantauan tumbuh kembang anak sejak bayi hingga remaja. Dengan pendekatan yang ramah dan penuh perhatian, dokter spesialis anak siap membantu, menjaga kesehatan, dan mendukung tumbuh kembang secara optimal buah hati anda.",

    layanan: [
      "Pemeriksaan Kesehatan Anak",
      "Konsultasi Dokter Spesialis Anak",
      "Pemantauan Tumbuh Kembang ",
      "Imunisasi Anak",
      "Penanganan Penyakit Anak",
      "Konsultasi Nutrisi dan Gizi Anak",
      "Kontrol dan Perawatan Lanjutan",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "07.00 - 14.00",
      },
      {
        hari: "Selasa",
        jam: "07.00 - 11.30",
      },
      {
        hari: "Rabu",
        jam: "07.00 - 14.00",
      },
      {
        hari: "Kamis",
        jam: "09.00 - 15.00",
      },
      {
        hari: "Jumat",
        jam: "07.00 - 11.30",
      },
      {
        hari: "Sabtu",
        jam: "13.00 - 19.00",
      },
    ],

    kondisi: [
      "Demam",
      "Batuk dan Pilek",
      "Diarrhea",
      "Alergi Pada Anak",
      "Asma",
      "Gangguan Pencernaan",
      "Infeksi Saluran Pernapasan",
      "Gangguan Pertumbuhan",
      "Masalah Nutrisi",
      "Penyakit Infeksi Pada Anak",
      "Pemantauan Tumbuh Kembang",
      "Pemeriksaan Kesehatan Rutin",
      ""
    ],

    doctors: [
      {
        nama: "dr. Rahmini Shabariah. Sp.A",
        foto: dokter_rahmini,
      },
      {
        nama: "dr. Bambang Guritno. Sp.A",
        foto: dokter_bambang,
      },
      {
        nama: "dr. Emilda. Sp.A",
        foto: dokter_emilda,
      },
      {
        nama: "dr. Dwi Suryangning Apriliza. Sp.A",
        foto: dokter_dwi,
      }
    ],
  },

  {
    slug: "obgyn",

    nama: "Poliklinik Obgyn",

    icon: Heartbeat,

    banner: bannerObgyn,

    deskripsi:

    "Poliklinik Obgyn melayani pemeriksaan, konsultasi, diagnosis, dan penanganan berbagai kondisi yang berkaitan dengan kesehatan reproduksi wanita. Selain itu, poli ini juga memberikan pendamping selama masa kehamilan, persalinan, hingga perawatan pasca kelahiran, dengan mengutamakan keselamatan ibu dan bayi.",

    layanan: [
      "Konsultasi Kehamilan",
      "Pemeriksaan Kandungan",
      "USG Kehamilan",
      "Pemantauan Tumbuh Kembang Janin",
      "Konsultasi Kesehatan Reproduksi Wanita",
      "Program Kehamilan (ProMil)",
      "Penangan Gangguan Ginekologi",
      "Kontrol Pasca Melahirkan",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "06.30 - 18.00",
      },
      {
        hari: "Selasa",
        jam: "08.00 - 18.00",
      },
      {
        hari: "Rabu",
        jam: "06.30 - 18.00",
      },
      {
        hari: "Kamis",
        jam: "08.00 - 18.00",
      },
      {
        hari: "Jumat",
        jam: "06.30 - 18.00",
      },
      {
        hari: "Sabtu",
        jam: "06.00 - 12.00",
      },
    ],

    kondisi: [
      "Pemeriksaan Kehamilan Rutin",
      "Program Kehamilan",
      "Gangguan Menstruasi",
      "Kista Ovarium",
      "Miom Uteri",
      "Endometriosis",
      "Infeksi Pada Organ Reproduksi",
      "Kepetihan Yang Tidak Normal",
      "Menapause dan Gejalanya",
      "Nyeri Panggul",
      "Pemeriksaan Kesehatan Serviks",
      "Gangguan Kesuburan",
    ],

    doctors: [
      {
        nama: "dr. Yuliati. Sp.OG",
        foto: dokter_yuliati,
      },
      {
        nama: "dr. Mirwan Harfi. Sp.OG",
        foto: dokter_mirwan,
      },
      {
        nama: "dr. Ardi Levrian. Sp.OG",
        foto: dokter_ardi,
      },
      {
        nama: "dr. Renaldy. Sp.OG",
        foto: dokter_renaldi,
      },
    ],
  },

  {
    slug: "anestesi",

    nama: "Poliklinik Anestesi",

    icon: Syringe,

    banner: bannerAnestesi,

    deskripsi:

    "Poliklinik Anestesi berperan dalam melakukan penilaian kondisi kesehatan pasien sebelum menjalani operasi atau tindakan medis yang memerlukan anestesi. Dokter spesialis anestesi akan menentukan jenis anestesi yang sesuai, memantau kondisi pasien selama prosedur berlangsung, serta memastikan proses pemulihan berjalan dengan aman dan optimal.",

    layanan: [
      "Konsultasi Pra Anestesi",
      "Evaluasi Kondisi Pasien Sebelum Operasi",
      "Pelayanan Anestesi Umum",
      "Pelayanan Anestesi Regional",
      "Pemantauan Selama Tindakan Operasi",
      "Pendampingan dan Pemantauan Pasca Anestesi",
      "Konsultasi Risiko dan Edukasi Anestesi",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.00 - 18.00",
      },
      {
        hari: "Selasa",
        jam: "14.00 - 20.00",
      },
      {
        hari: "Rabu",
        jam: "15.00 - 19.00",
      },
      {
        hari: "Kamis",
        jam: "15.00 - 20.00",
      },
      {
        hari: "Jumat",
        jam: "15.00 - 18.30",
      },
      {
        hari: "Sabtu",
        jam: "17.00 - 23.55",
      },
    ],

    kondisi: [
      "Evaluasi Kelayakan Sebelum Operasi",
      "Persiapan Anestesi Untuk Operasi Elektif",
      "Persiapan Anestesi Untuk Operasi Darurat",
      "Penilaian Risiko Anestesi",
      "Penanganan Nyeri Selama Prosedur Medis",
      "Pemantauan Pasien Selama Operasi",
      "Pemulihan Setelah Anestesi",
      "Manajemen Nyeri Pasca Operasi",
    ],

    doctors: [
      {
        nama: "dr. Edwin Haposan. Sp.An",
        foto: dokter_edwin,
      },
      {
        nama: "dr. Nyiemas Moya. Sp.An",
        foto: dokter_nyiemas,
      },
      {
        nama: "dr. Andie Muhari. Sp.An-KIC",
        foto: dokter_andie,
      },
      {
        nama: "dr. Agi Ardian Hidayat. Sp.An-TI",
        foto: dokter_agi,
      },
      {
        nama: "dr. Rivan Putra Afewa. Sp.An",
        foto: dokter_rivan,
      },
    ],
  },

  {
    slug: "syaraf",

    nama: "Poliklinik Syaraf",

    icon: Brain,

    banner: bannerSyaraf,

    deskripsi:

    "Poliklinik Syaraf melayani pemeriksaan, diagnosis, pengobatan, dan pemantauan berbagai penyakit yang memengaruhi otak, syaraf, otot, serta sistem syaraf maupun tepi. Dokter spesialis syaraf akan melakukan evaluasi secara menyeluruh untuk menentukan penganganan yang sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Syaraf",
      "Pemeriksaan Gangguan Syaraf",
      "Evaluasi dan Diagnosis Penyakit Syaraf",
      "Penanganan Penyakti Syaraf",
      "Pemantauan Pasca Stroke",
      "Kontrol dan Penyakit Syaraf",
      "Edukasi Kesehatan Syaraf",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Selasa",
        jam: "13.00 - 20.00",
      },
      {
        hari: "Rabu",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Kamis",
        jam: "13.00 - 20.00",
      },
      {
        hari: "Jumat",
        jam: "15.30 - 22.00",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 16.00",
      },
    ],

    kondisi: [
      "Stroke",
      "Sakit Kepala dan Migrain",
      "Epilepsi",
      "Vertigo",
      "Parkinson",
      "Gangguan Syaraf Tepi (Neuropati)",
      "Tremor",
      "Nyeri Syaraf",
      "Syaraf Berkepanjangan",
      "Gangguan Keseimbangan",
      "Gangguan Memori",
      "Kelumpuhan Akibat Gangguan Syaraf",
    ],

    doctors: [
      {
        nama: "dr. Dedy Maryanto. Sp.S",
        foto: dokter_dedy,
      },
      {
        nama: "dr. Fitria Delima Tiffany. Sp.S",
        foto: dokter_fitria,
      },
    ],
  },

  {
    slug: "jantung",

    nama: "Poliklinik Jantung",

    icon: Heartbeat,

    banner: bannerJantung,

    deskripsi:
    "Poli Jantung memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, dan pemantauan berbagai penyakit jantung serta pembuluh darah. Dokter spesialis jantung akan melakukan pemeriksaan secara menyeluruh guna menentukan penanganan yang sesuai dengan kondisi dan kebutuhan setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Jantung",
      "Pemeriksaan Kesehatan Jantung",
      "Elektrokardiografi (EKG)",
      "Ekokardiografi (USG Jantung)",
      "Penanganan Penyakit Jantung",
      "Kontrol dan Pemantauan Jantung",
      "Edukasi Pencegahan Penyakit Jantung",
    ],

    jadwal: [
      {
        hari: "Rabu",
        jam: "16.00 - 22.00",
      },
      {
        hari: "Kamis",
        jam: "09.00 - 15.00",
      },
      {
        hari: "Jum'at",
        jam: "09.00 - 15.00",
      },
      {
        hari: "Sabtu",
        jam: "08 - 16.00",
      },
    ],

    kondisi: [
      "Hipertensi (Tekanan Darah Tinggi)",
      "Penyakit Jantung Koroner",
      "Gagal Jantung",
      "Gangguan Irama Jantung (Aritmia)",
      "Nyeri Dada",
      "Penyakit Katup Jantung",
      "Kolestrol Tinggi yang Berisiko terhadap Jantung",
      "Sesak Nafas Akibat Gangguan Jantung",
      "Penyakti Pembulu Darah",
      "Pemeriksaan Risiko Penyakit Jantung",
    ],

    doctors: [
      {
        nama: "dr. Sindy Hendrawansyah. Sp.JP",
        foto: dokter_sindy,
      },
    ],
  },

  {
    slug: "bedah-syaraf",

    nama: "Poliklinik Bedah Syaraf",

    icon: Brain,

    banner: bannerBedahSyaraf,

    deskripsi:
    "Poliklinik Bedah Syaraf memberikan pelayanan medis untuk diagnosis, evaluasi, dan tindakan bedah pada gangguan sistem syaraf pusat maupun syaraf tepi. Dokter spesialis bedah syaraf akan melakukan pemeriksaan menyeluruh untuk menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien, dengan mengutamakan keselamatan dan kualitas hidup pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Bedah Syaraf",
      "Pemeriksaan dan Evaluasi Syaraf (Neurologis)",
      "Perencanaan Tindakan Bedah Syaraf",
      "Penanganan Cedera Kepala",
      "Penanganan Gangguan Tulang Belakang",
      "Perawatan Sebelum dan Sesudah Operasi",
      "Kontrol Pasca Operasi Bedah Syaraf",
    ],

    jadwal: [
      {
        hari: "Selasa",
        jam: "19.00 - 21.00",
      },
      {
        hari: "Jum'at",
        jam: "19.00 - 21.00",
      },
    ],

    kondisi: [
      "Cedera Kepala",
      "Tumor Otak",
      "Pendarahan pada Otak",
      "Syaraf Terjepit (NHP)",
      "Kelainan Tulang Belakang",
      "Hidrosefalus",
      "Cedera Tulang Belakang",
      "Nyeri Syaraf Kronis",
      "Kelainan Syaraf yang Memerlukan Operasi",
      "Trauma pada Sistem Syaraf",
    ],

    doctors: [
      {
        nama: "dr. Wargian Hadisaputra. Sp.BS",
        foto: dokter_wargian,
      },
    ],
  },

  {
    slug: "tht-kl",

    nama: "Poliklinik THT-KL",

    icon: Stethoscope,

    banner: bannerTht,

    deskripsi:
    "Poli THT-KL memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, dan pemantauan berbagai penyakit yang berkaitan dengan telinga, hidung, tenggorokan, kepala, dan leher. Dokter spesialis THT-KL akan melakukan pemeriksaan secara menyeluruh untuk menentukan penanganan yang sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis THT-KL",
      "Pemeriksaan Telinga, Hidung, Tenggorokan, Bedah Kepala, dan Leher",
      "Penanganan Gangguan Hidung dan Sinus",
      "Pemeriksaan Gangguan Suara dan Tenggorokan",
      "Tindakan Medis THT-KL",
      "Pengobatan Penyakit THT-KL",
      "Kontrol dan Pemantauan Pasien",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Selasa",
        jam: "13.00 - 20.00",
      },
      {
        hari: "Rabu",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Kamis",
        jam: "13.00 - 20.00",
      },
      {
        hari: "Jum'at",
        jam: "16.30 - 22.00",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 16.00",
      },
    ],

    kondisi: [
      "Infeksi Telinga",
      "Gangguan Pendengaran",
      "Telinga Berdenging (Tinnitus)",
      "Sinusitis",
      "Rhinitis Alergi",
      "Mimisan Berulang",
      "Radang Tenggorokan (Faringitis)",
      "Amandel (Tonsilitis)",
      "Gangguan Pita Suara",
      "Benjolan pada Kepala dan Leher",
      "Vertigo yang Berkaitan dengan Gangguan Telinga",
      "Gangguan Pernafasan Akibat Kelainan THT",
    ],

    doctors: [
      {
        nama: "dr. Pramusinto. Sp.THT-KL",
        foto: dokter_pramusinto,
      },
      {
        nama: "dr. M. Lukmanul Hakim. Sp.THT-KL",
        foto: dokter_lukmanul,
      },
    ],
  },

  {
    slug: "mata",

    nama: "Poliklinik Mata",

    icon: Eye,

    banner: bannerMata,

    deskripsi:
      "Poli Mata memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, serta pemantauan berbagai penyakit dan gangguan pada mata. Dokter spesialis mata akan melakukan pemeriksaan secara menyeluruh untuk menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien, sehingga kesehatan mata dan kualitas penglihatan tetap terjaga.",

    layanan: [
      "Konsultasi Dokter Spesialis Mata",
      "Pemeriksaan Kesehatan Mata",
      "Pemeriksaan Ketajaman Pengelihatan",
      "Penanganan Penyakit Mata",
      "Pemeriksaan Mata Rutin",
      "Kontrol dan Pemantauan Penyakit Mata",
      "Edukasi Perawatan Kesehatan Mata",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.30 - 19.00",
      },
      {
        hari: "Rabu",
        jam: "14.00 - 22.00",
      },
      {
        hari: "Sabtu",
        jam: "06.00 - 10.00",
      },
    ],

    kondisi: [
      "Mata Merah",
      "Mata Kering",
      "Katarak",
      "Glukoma",
      "Rabun Jauh (Miopia)",
      "Rabun Dekat (Hipermetropi",
      "Astigmatime (Mata Silinder)",
      "Infeksi Mata",
      "Alergi Mata",
      "Mata Lelah Akibat Aktivitas Digital",
      "Gangguan Pengelihatan",
      "Kelainan Mata Lainnya",
    ],

    doctors: [
      {
        nama: "dr. Widya Sasi Kirana. Sp.M",
        foto: dokter_widya,
      },
    ],
  },

  {
    slug: "rehab-medik",

    nama: "Poliklinik Rehab Medik",

    icon: Wheelchair,

    banner: bannerRehabMedik,

    deskripsi:
    "Poli Rehabilitasi Medik memberikan pelayanan medis yang bertujuan memulihkan kemampuan fisik, meningkatkan kemandirian, serta membantu pasien kembali menjalani aktivitas sehari-hari secara optimal. Program rehabilitasi disusun secara menyeluruh sesuai dengan kondisi dan kebutuhan masing-masing pasien melalui pendekatan yang terintegrasi.",

    layanan: [
      "Konsultasi Dokter Spesialis Rehabilitasi Medik",
      "Evaluasi Gangguan Fungsi Gerak",
      "Program Rehabilitasi Fisik",
      "Penanganan Cedera Otot dan Sendi",
      "Rehabilitasi Pasca Operasi",
      "Rehabilitasi Pasca Stroke",
      "Konsultasi dan Edukasi Program Latihan",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "14.00 - 21.30",
      },
      {
        hari: "Selasa",
        jam: "07.00 - 14.00",
      },
      {
        hari: "Rabu",
        jam: "07.00 - 14.00",
      },
      {
        hari: "Kamis",
        jam: "14.30 - 21.30",
      },
      {
        hari: "Jum'at",
        jam: "07.00 - 14.00",
      },
      {
        hari: "Sabtu",
        jam: "14.30 - 21.30",
      },
    ],

    kondisi: [
      "Stroke dan Gangguan Gerak Pasca Stroke",
      "Cedera otot, Sendi, dan Tulang",
      "Nyeri Punggung dan Leher",
      "Nyeri Bahu, Lutut, dan Pinggul",
      "Gangguan Syaraf yang Memengaruhi Gerakan",
      "Cedera Akibat Kecelakaan",
      "Pemulihan Pasca Operasi",
      "Gangguan Keseimbangan dan Koordinasi",
      "Kelemahan Otot",
      "Gangguan Aktivitas Fungsional Sehari-hari",
    ],

    doctors: [
      {
        nama: "dr. Tonny Roboth. Sp.THT-KL",
        foto: dokter_tonny,
      },
    ],
  },

  {
    slug: "jiwa",

    nama: "Poliklinik Kejiwaan",

    icon: Brain,

    banner: bannerKejiwaan,

    deskripsi:
    "Poli Rehabilitasi Medik memberikan pelayanan medis yang bertujuan memulihkan kemampuan fisik, meningkatkan kemandirian, serta membantu pasien kembali menjalani aktivitas sehari-hari secara optimal. Program rehabilitasi disusun secara menyeluruh sesuai dengan kondisi dan kebutuhan masing-masing pasien melalui pendekatan yang terintegrasi.",

    layanan: [
      "Konsultasi Dokter Spesialis Kejiwaan",
      "Pemeriksaan dan Evaluasi Kesehatan Mental",
      "Penanganan Gangguan Kejiwaan",
      "Konseling dan Edukasi Pasien",
      "Konsultasi Bersama Keluarga",
      "Kontrol dan Pemantauan Kondisi Pasien",
      "Evaluasi Terapi dan Pengobatan",
    ],

    jadwal: [
      {
        hari: "Selasa",
        jam: "14.00 - 20.30",
      },
      {
        hari: "Rabu",
        jam: "14.00 - 20.30",
      },
      {
        hari: "Kamis",
        jam: "14.00 - 20.30",
      },
    ],

    kondisi: [
      "Gangguan Kecemasan (Anxiety)",
      "Depresi",
      "Gangguan Bipolar",
      "Gangguan Tidur (Insomnia)",
      "Gangguan Panik",
      "Gangguan Obsesif Kompulsif (OCD)",
      "Skizofernia",
      "Gangguan Stress Pascatrauma (PTSD)",
      "Gangguan Psikosomatis",
      "Gangguan Emosi dan Perilaku",
      "Gangguan Konsentrasi",
      "Permasalahan Kesehatan Mental Lainnya",
    ],

    doctors: [
      {
        nama: "dr. Yolly Yubhar. Sp.KJ",
        foto: dokter_yolly,
      },
    ],
  },

  {
    slug: "paru",

    nama: "Poliklinik Paru",

    icon: Wind,

    banner: bannerParu,

    deskripsi:
    "Poli Paru memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, serta pemantauan berbagai penyakit yang berkaitan dengan paru-paru dan saluran pernapasan. Dokter spesialis paru akan melakukan pemeriksaan secara menyeluruh guna menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Paru",
      "Pemeriksaan Kesehatan Paru dan Saluran Pernafasan",
      "Evaluasi Hasil Foto Rontgen Dada",
      "Penanganan Penyakit Paru",
      "Pemeriksaan Gangguan Pernafasan",
      "Kontrol dan Pemantauan Penyakit Paru",
      "Edukasi Pencegahan Penyakit Paru",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Selasa",
        jam: "06.30 - 12.30",
      },
      {
        hari: "Rabu",
        jam: "12.00 - 22.00",
      },
      {
        hari: "Kamis",
        jam: "15.00 - 22.00",
      },
      {
        hari: "Jum'at",
        jam: "06.30 - 12.30",
      },
      {
        hari: "Sabtu",
        jam: "07.00 - 18.00",
      },
    ],

    kondisi: [
      "Asma",
      "Pneumonia (Radang Paru)",
      "Tuberkulosis (TBC)",
      "Penyakit Paru Obstruktif Kronis (PPOK)",
      "Bronkitis",
      "Infeksi Saluran Pernafasan",
      "Batuk Kronis",
      "Sesak Nafas",
      "Alergi Saluran Pernafasan",
      "Kelainan Paru Lainnya",
    ],

    doctors: [
      {
        nama: "dr. Ben Ben Irwandi. M.Kes. Sp.P",
        foto: dokter_benben,
      },
      {
        nama: "dr. Syariffudin M.Kes. Sp.P",
        foto: dokter_syariffudin,
      },
    ],
  },

{
    slug: "kulit-kelamin",

    nama: "Poliklinik Kulit & Kelamin",

    icon: Drop,

    banner: bannerKulitKelamin,

    deskripsi:
    "Poli Kulit dan Kelamin memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, dan pemantauan berbagai gangguan pada kulit, rambut, kuku, serta penyakit kelamin. Dokter spesialis kulit dan kelamin akan melakukan pemeriksaan secara menyeluruh untuk menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Kulit & Kelamin",
      "Pemeriksaan Penyakit Kulit",
      "Penanganan Gangguan Rambut dan Kuku",
      "Pengobatan Penyakit Kulit & Kelamin",
      "Konsultasi Perawatan Kulit",
      "Kontrol dan Pemantauan Pasien",
      "Edukasi Pencegahan Penyakit Kulit & Kelamin",
    ],

    jadwal: [
      {
        hari: "Selasa",
        jam: "14.00 - 18.00",
      },
      {
        hari: "Kamis",
        jam: "14.00 - 18.00",
      },
    ],

    kondisi: [
      "Jerawat",
      "Eksim (Dermatitis)",
      "Infeksi Jamur Kulit",
      "Biduran (Urtikaria)",
      "Psoriasis",
      "Kutil",
      "Herpes",
      "Alergi Kulit",
      "Gangguan Pigmentasi Kulit",
      "Kerontokan Rambut",
      "Penyakit Menular Seksual (PMS)",
      "Gangguan Pada Kuku",
    ],

    doctors: [
      {
        nama: "dr. Endang Tri Wahyuni. Sp.KK",
        foto: dokter_endang,
      },
    ],
  },

{
    slug: "ortopedi",

    nama: "Poliklinik Orthopedi",

    icon: Bone,

    banner: bannerOrthopedi,

    deskripsi:
    "Poli Orthopedi memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, hingga rehabilitasi berbagai gangguan pada sistem muskuloskeletal. Dokter spesialis ortopedi akan melakukan pemeriksaan secara menyeluruh untuk menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien, baik melalui terapi nonoperatif maupun tindakan bedah apabila diperlukan.",
      layanan: [
      "Konsultasi Dokter Spesialis Orthopedi",
      "Pemeriksaan Tulang, Sendi, dan Otot",
      "Evaluasi Foto Rontgen dan Pemeriksaan Penunjang",
      "Penanganan Cedera Tulang dan Sendi",
      "Konsultasi Sebelum dan Sesudah Operasi Orthopedi",
      "Penanganan Cedera Olahraga",
      "Kontrol dan Pemantauan Pasien",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "07.00 - 09.00",
      },
      {
        hari: "Selasa",
        jam: "08.00 - 12.00",
      },
      {
        hari: "Kamis",
        jam: "14.00 - 18.00",
      },
    ],

    kondisi: [
      "Patah Tulang (Fraktur)",
      "Diskolasi Sendi",
      "Osteoartritis",
      "Osteoporosis",
      "Nyeri Lutut",
      "Nyeri Bahu",
      "Nyeri Pinggang",
      "Cedera Ligamen dan Tendon",
      "Cedera Olahraga",
      "Kelainan Bentuk Tulang",
      "Carpal Tunnel Syndrome",
      "Gangguan Sistem Gerak Lainnya",
    ],

    doctors: [
      {
        nama: "dr. Fajar Yulianto Sp.OT",
        foto: dokter_fajar,
      },
    ],
  },

{
    slug: "radiologi",

    nama: "Poliklinik Radiologi",

    icon: Monitor,

    banner: bannerRadiologi,

    deskripsi:
    "Poli Radiologi merupakan layanan penunjang medis yang menyediakan berbagai pemeriksaan pencitraan untuk membantu proses diagnosis, pemantauan, dan evaluasi kondisi pasien. Hasil pemeriksaan akan dianalisis oleh dokter spesialis radiologi sehingga dapat menjadi acuan bagi dokter yang merawat dalam menentukan penanganan yang tepat.",

    layanan: [
      "Foto Rontget (X-Ray)",
      "Pemeriksaan USG",
      "Pemeriksaan CT Scan (Jika Tersedia)",
      "Interpretasi Hasil Pemeriksaan Radiologi",
      "Konsultasi Dokter Spesialis Radiologi",
      "Pemeriksaan Penunjang Diagnostik",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "15.00 - 17.00",
      },
      {
        hari: "Selasa",
        jam: "08.00 - 12.00",
      },
      {
        hari: "Rabu",
        jam: "15.00 - 17.00",
      },
      {
        hari: "Kamis",
        jam: "08.00 - 12.00",
      },
      {
        hari: "Sabtu",
        jam: "08.00 - 12.00",
      },
    ],

    kondisi: [
      "Cedera Tulang atau Patah Tulang",
      "Nyeri Dada dan Gangguan Paru-paru",
      "Kelainan pada Organ Dalam",
      "Pemeriksaan Kehamilan Melalui USG",
      "Cedera Kepala",
      "Gangguan Sendi dan Tulang Belakang",
      "Evaluasi Pasca Operasi",
      "Pemeriksaan Saluran Kemih",
      "Pemeriksaan Abdomen",
      "Pemeriksaan Penunjang Penyakit Lainnya",
    ],

    doctors: [
      {
        nama: "dr. Rosilah. Sp.Rad",
        foto: dokter_rosilah,
      },
      {
        nama: "dr. Ayu Setyowati. Sp.Rad",
        foto: dokter_ayu,
      },
    ],
  },

{
    slug: "urologi",

    nama: "Poliklinik Urologi",

    icon: Drop,

    banner: bannerUrologi,

    deskripsi:
    "Poli Urologi memberikan pelayanan medis untuk pencegahan, diagnosis, pengobatan, dan pemantauan berbagai gangguan pada ginjal, ureter, kandung kemih, uretra, serta organ reproduksi pria. Dokter spesialis urologi akan melakukan pemeriksaan secara menyeluruh guna menentukan penanganan yang tepat sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Dokter Spesialis Urologi",
      "Pemeriksaan Saluran Kemih",
      "Evaluasi Batu Saluran Kemih",
      "Penanganan Gangguan Berkemih",
      "Pemeriksaan Gangguan Sistem Reproduksi Pria",
      "Kontrol dan Pemantauan Pasien",
      "Edukasi Pencegahan Penyakit Urologi",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "08.00 - 13.00",
      },
      {
        hari: "Selasa",
        jam: "08.00 - 13.00",
      },
      {
        hari: "Rabu",
        jam: "08.00 - 13.00",
      },
    ],

    kondisi: [
      "Batu Ginjal",
      "Batu Kantung Kemih",
      "Infeksi Saluran Kemih (ISK)",
      "Gangguan Buang Air Kecil",
      "Pembesaran Prostat Jinak (BPH)",
      "Inkontinensia Urine (Sulit Menahan Buang Air Kecil)",
      "Darah Dalam Urine (Hematuria)",
      "Gangguan Fungsi Kantung Kemih",
      "Gangguan Kesuburan Pria",
      "Kelainan pada Organ Reproduksi Pria",
      "Kanker Saluran Kemih dan Prostat (Sesuai Indikasi)",
    ],

    doctors: [
      {
        nama: "dr. Raden Indra Tresnanda. Sp.U",
        foto: dokter_raden,
      },
    ],
  },

{
    slug: "konservasi-gigi",

    nama: "Poliklinik Konservasi Gigi",

    icon: Tooth,

    banner: bannerKonservasiGigi,

    deskripsi:
    "Poli Konservasi Gigi berfokus pada pencegahan, diagnosis, dan perawatan kerusakan gigi dengan tujuan mempertahankan gigi asli selama mungkin. Melalui teknologi dan metode perawatan yang tepat, dokter akan memberikan penanganan sesuai kondisi pasien untuk menjaga kesehatan gigi, fungsi pengunyahan, serta estetika senyum.",

    layanan: [
      "Konsultasi Dokter Gigi Konservasi",
      "Pemeriksaan dan Diagnosis Kerusakan Gigi",
      "Penambalan Gigi Estetik",
      "Perawatan Saluran Akar (Root Canal Treatment)",
      "Restorasi Gigi",
      "Perawatan Gigi Retak atau Patah",
      "Kontrol dan Evaluasi Pasca Perawatan",
    ],

    jadwal: [
      {
        hari: "Rabu",
        jam: "16.00 - 18.00",
      },
    ],

    kondisi: [
      "Gigi Berlubang",
      "Gigi Retak atau Patah",
      "Nyeri Gigi Akibat Kerusakan Syaraf",
      "Infeksi Pulpa Gigi",
      "Gigi Sensitif",
      "Tambalan Gigi Rusak atau Lepas",
      "Trauma pada Gigi",
      "Perubahan Warna Gigi",
      "Kerusakan Jaringan Gigi",
      "Perawatan Untuk Mempertahankan Gigi Alami",
    ],

    doctors: [
      {
        nama: "drg. Muhammad Yoga. Sp.KG",
        foto: dokter_yoga,
      },
    ],
  },

  {
    slug: "penyakit-dalam",

    nama: "Poliklinik Penyakit Dalam",

    icon: Stethoscope,

    banner: bannerPenyakitDalam,

    deskripsi:
    "Poli Penyakit Dalam memberikan pelayanan medis untuk diagnosis, pengobatan, dan pencegahan berbagai penyakit pada organ dalam tanpa tindakan operasi. Dokter spesialis penyakit dalam akan melakukan evaluasi menyeluruh untuk menentukan penanganan yang sesuai dengan kondisi setiap pasien.",

    layanan: [
      "Konsultasi Penyakit Dalam",
      "Pemeriksaan dan Diagnosis",
      "Pengobatan Penyakit Kronis",
      "Medical Check Up",
      "Evaluasi Hasil Laboratorium",
      "Kontrol dan Pemantauan Penyakit",
    ],

    jadwal: [
      {
        hari: "Senin",
        jam: "09.00 - 22.00",
      },
      {
        hari: "Selasa",
        jam: "08.00 - 21.00",
      },
      {
        hari: "Rabu",
        jam: "16.00 - 22.00",
      },
      {
        hari: "Kamis",
        jam: "09.00 - 23.55",
      },
      {
        hari: "Jum'at",
        jam: "11.00 - 23.55",
      },
      {
        hari: "Sabtu",
        jam: "08.00 - 22.00",
      },
    ],

    kondisi: [
      "Gangguan Ginjal",
      "Penyakit Tiroid",
      "Infeksi Saluran Pernapasan",
      "Anemia",
      "Demam Berkepanjangan",
      "Penyakit Metabolik",
      "Diabetes Melitus",
      "Hipertensi",
      "Kolestrol Tinggi",
      "Asam Urat",
      "Penyakit Lambung (Gastritis/GERD)",
      "Gangguan Hati",
    ],

    doctors: [
      {
        nama: "dr. Yulia Marina. Sp.PD",
        foto: dokter_yulia,
      },
      {
        nama: "dr. Mukhlis. Sp.PD",
        foto: dokter_mukhlis,
      },
      {
        nama: "dr. Alvy Syukrie. Sp.PD. FINASM",
        foto: dokter_alvy,
      },
      {
        nama: "dr. Halim Endru. Sp.PD",
        foto: dokter_halim,
      },
    ],
  },

  

];