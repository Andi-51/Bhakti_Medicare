import mottoBg from "@/assets/images/motto_bg.png";

const Motto = () => {
  return (
    <section
      style={{ backgroundImage: `url(${mottoBg})` }}
      className="relative overflow-hidden bg-cover bg-center py-24"
      id="motto"
    >
      <div className="absolute inset-0 bg-cyan-500/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 via-cyan-500/70 via-45% to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-md">

          <p className="mt-6 text-xl leading-10 italic font-semibold text-white">
            Kesehatan Anda adalah prioritas utama kami. Bersama tim medis yang
            kompeten dan fasilitas modern, kami berkomitmen untuk selalu
            melayani dengan sepenuh hati di setiap langkah pemulihan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motto;