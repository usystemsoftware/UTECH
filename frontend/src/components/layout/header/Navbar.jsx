import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => (
  <>
    <div className="block lg:hidden">
      <NavbarMobile />
    </div>
    <div className="hidden lg:block">
      <NavbarDesktop />
    </div>
  </>
);

export default Navbar;