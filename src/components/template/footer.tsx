import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/images/Logo.png";

/**
 * A link that scrolls to a homepage section.
 * If already on "/", smooth-scrolls directly. Otherwise navigates to "/" first.
 */
const SectionLink = ({
  sectionId,
  children,
  className,
}: {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <a href={`#${sectionId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary/60 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          <div className="space-y-2">
            <img src={logo} alt="RS Bhakti Medicare" className="h-28" />

            <p className="text-sm leading-7 text-cyan-50">
              Rumah Sakit Bhakti Medicare berkomitmen memberikan pelayanan
              kesehatan terbaik dengan tenaga medis profesional dan fasilitas
              yang modern.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Menu
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cyan-200 transition">Beranda</Link></li>
              <li><SectionLink sectionId="about" className="hover:text-cyan-200 transition">Tentang</SectionLink></li>
              <li><SectionLink sectionId="visiMisi" className="hover:text-cyan-200 transition">Visi & Misi</SectionLink></li>
              <li><SectionLink sectionId="poliklinik" className="hover:text-cyan-200 transition">Poliklinik</SectionLink></li>
            </ul>
          </div>

          <div>
  <h3 className="mb-5 text-lg font-semibold">Hubungi Kami</h3>

  <div className="space-y-4 text-sm">

    <a
      href="tel:+62266731555"
      className="flex items-center gap-3 transition hover:text-cyan-200"
    >
      <Phone size={18} />
      <span>(0266) 731555</span>
    </a>

    <a
      href="mailto:info@bhaktimedicare.com"
      className="flex items-center gap-3 transition hover:text-cyan-200"
    >
      <Mail size={18} />
      <span>bhaktimedicare@rocketmail.com</span>
    </a>

    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 transition hover:text-cyan-200"
    >
      <FaYoutube size={18} />
      <span>RSBMtv</span>
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 transition hover:text-cyan-200"
    >
      <FaInstagram size={18} />
      <span>rs_bhaktimedicare</span>
    </a>

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 transition hover:text-cyan-200"
    >
      <FaFacebookF size={18} />
      <span>RS Bhakti Medicare</span>
    </a>

  </div>
</div>

        <div className="mt-12 border-t border-cyan-400 pt-6 text-center text-sm text-cyan-100">
          © {new Date().getFullYear()} RS Bhakti Medicare. All Rights Reserved.
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;