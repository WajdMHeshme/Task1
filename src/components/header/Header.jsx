import TopNav from "./topNav/TopNav";
import MainNav from "./mainNav/MainNav";
import { GoArrowRight } from "react-icons/go";
import './Header.css'
const Header = () => {
  return (
    <header>
      <TopNav
        text={"Admission is Open, Grab your seat now"}
        icon={<GoArrowRight />}
      />
      <MainNav logo={"/assets/shape-14.svg"} logoTitle={"Little learners"} />
    </header>
  );
};

export default Header;
