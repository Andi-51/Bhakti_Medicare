import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, Menu, ChevronDown } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import Logo from "@/assets/images/Logo.png"
import { navGroups } from "@/data/navigation"
import type { NavSubItem } from "@/data/navigation"

const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === "mcu") return "MCU";
      if (word.toLowerCase() === "&") return "&";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

/** Determines the grid column count based on submenu item count */
const getGridConfig = (count: number) => {
  if (count <= 1) return { cols: "grid-cols-1", width: "w-[180px]" };
  if (count <= 2) return { cols: "grid-cols-2", width: "w-[300px]" };
  return { cols: "grid-cols-3", width: "w-[400px]" };
};

/** Renders a submenu link — React Router Link for routes, anchor for hash */
const SubLink = ({
  sub,
  className,
  onClick,
  children,
}: {
  sub: NavSubItem;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const location = useLocation();

  if (sub.type === "route") {
    return (
      <Link to={sub.href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Hash link — smooth scroll on homepage, navigate then scroll otherwise
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    const sectionId = sub.href.replace("#", "");
    if (!sectionId) return;

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={sub.href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);

  const closeMobile = () => setMobileOpen(false);

  const toggleMobileGroup = (title: string) => {
    setExpandedMobileGroup((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-xs border-b border-border/80 transition-all duration-300">
      <section className="max-w-7xl w-[95%] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-40 justify-center"/>
        </Link>

        {/* Tab & PC Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {navGroups.map((nav) => {
                const { cols, width } = getGridConfig(nav.subs.length);

                return (
                  <NavigationMenuItem key={nav.title}>
                    <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2">
                      {toTitleCase(nav.title)}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="left-auto right-0">
                      <ul className={`grid ${width} gap-2 p-4 ${cols} bg-popover rounded-xl shadow-lg border border-border/50`}>
                        {nav.subs?.map((sub) => (
                          <li key={sub.name}>
                            <NavigationMenuLink asChild>
                              <SubLink
                                sub={sub}
                                className="block rounded-lg p-2.5 hover:bg-primary/5 hover:text-primary transition-all duration-200"
                              >
                                <div className="font-semibold text-sm text-foreground">{sub.name}</div>
                              </SubLink>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted rounded-lg">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col gap-6">
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle className="flex items-center gap-2 text-primary font-bold text-lg">
                    <img src={Logo} alt="Logo" className="w-30 justify-center"/>
                  </SheetTitle>
                </SheetHeader>

                <div className="w-full flex flex-col gap-1">
                  {navGroups.map((nav) => {
                    const isExpanded = expandedMobileGroup === nav.title;

                    return (
                      <div key={nav.title} className="w-full">
                        <button
                          type="button"
                          onClick={() => toggleMobileGroup(nav.title)}
                          className="w-full flex justify-between items-center py-2.5 px-3 text-left font-semibold text-sm hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                        >
                          {toTitleCase(nav.title)}
                          <ChevronDown
                            className={`size-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isExpanded && (
                          <ul className="pl-4 pr-1 py-1 flex flex-col gap-1 w-full border-l-2 border-primary/20 ml-4 my-1">
                            {nav.subs?.map((sub) => (
                              <li key={sub.name} className="w-full">
                                <SubLink
                                  sub={sub}
                                  className="flex items-center w-full rounded-md py-1.5 px-3 hover:bg-primary/5 hover:text-primary text-sm text-foreground/80 hover:text-foreground transition-all duration-200"
                                  onClick={closeMobile}
                                >
                                  {sub.name}
                                </SubLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Footer with CTA */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
                  Hubungi Kami
                </div>
                <a
                  href="tel:1500xxx"
                  className="flex items-center gap-3 p-3 rounded-xl bg-destructive/5 hover:bg-destructive/10 text-destructive border border-destructive/10 transition-colors"
                >
                  <Phone className="size-4" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-85">Gawat Darurat (24 Jam)</span>
                    <span className="text-sm font-bold">1500-XXX</span>
                  </div>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </nav>
  )
}

export default Navbar