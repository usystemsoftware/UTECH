import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => (
  <>
    <div className="block md:hidden">
      <NavbarMobile />
    </div>
    <div className="hidden md:block">
      <NavbarDesktop />
    </div>
  </>
);

export default Navbar;