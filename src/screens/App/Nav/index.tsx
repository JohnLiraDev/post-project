import MenuNav from "../components/MenuNav";
import Logo from "../../../assets/logo.svg";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";

export default function App() {
  const [isNav, setIsNav] = useState<boolean>(false);
  const toggleNav = () => {
    setIsNav(!isNav);
  };

  return (
    <>
      <nav className=" flex justify-around md:items-center mx-auto max-w-screen-2xl  ">
        <img src={Logo} alt="Site Logo" />
        <button onClick={() => toggleNav()} className="md:hidden">
          <Menu size={35}></Menu>
        </button>
        <MenuNav></MenuNav>
        <MobileMenu isNav={isNav} setIsNav={setIsNav}></MobileMenu>
      </nav>
    </>
  );
}
