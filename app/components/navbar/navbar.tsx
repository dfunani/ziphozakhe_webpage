import styles from "@/app/components/navbar/navbar.module.css";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Dropdown from "./dropdown";

export default function Navbar() {
  const dropdownList = {
    home: null,
    services: ["Counselling", "Therapy"],
    about: null,
  };
  return (
    <nav className={`${styles.container}`}>
      <div className={`${styles.logoContainer}`}>
        <Image
          className={`${styles.logoImage}`}
          src={logo}
          alt={"Logo"}
          width="100"
          height="75"
        />
        <div className={`${styles.logoHeader}`}>ZIPHOZAKHE KILI</div>
        <div className={`${styles.logoSubHeader}`}>
          COUNSELLING PSYCHOLOGIST
        </div>
      </div>
      <div className={`${styles.Dropdowns}`}>
        <Dropdown title="Home" isDropdown={!!dropdownList.home} dropdownItems={dropdownList.home} />
        <Dropdown title="Services" isDropdown={!!dropdownList.services} dropdownItems={dropdownList.services}/>
        <Dropdown title="About" isDropdown={!!dropdownList.about} dropdownItems={dropdownList.about}/>
        <button type="submit" className={`${styles.bookingBTN}`}>
          Book a session
        </button>
      </div>
    </nav>
  );
}
