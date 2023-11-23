"use client";
import styles from "@/app/components/navbar/navbar.module.css";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Dropdown from "./dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isDropDownSelected, setIsDropDownSelected] = useState<boolean>(false);
  const dropdownList = {
    home: ["Counselling", "Therapy"],
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
        <div className={`${styles.logoHeaderContainer}`}>
          <div className={`${styles.logoHeader}`}>ZIPHOZAKHE KILI</div>
          <div className={`${styles.logoSubHeader}`}>
            COUNSELLING PSYCHOLOGIST
          </div>
        </div>
      </div>
      <div className={`${styles.Dropdowns}`}>
        {Object.keys(dropdownList).map((key: string, index: number) => (
          <Dropdown
            key={index}
            title={key}
            isDropdown={!!(dropdownList as Record<string, any>)[key]}
            dropdownItems={(dropdownList as Record<string, any>)[key]}
          />
        ))}

        <button type="submit" className={`${styles.bookingBTN}`}>
          Book a session
        </button>
      </div>
      <button type="submit" className={`${styles.hamburger}`}>
        <GiHamburgerMenu
          onClick={() =>
            setIsDropDownSelected((isSelected: boolean) => !isSelected)
          }
        />
        {isDropDownSelected && (
          <div
            className={`${styles.DropdownsMobile}`}
            onMouseLeave={() => setIsDropDownSelected(false)}
          >
            {Object.keys(dropdownList).map((key: string, index: number) => (
              <Dropdown
                key={index}
                title={key}
                isDropdown={!!(dropdownList as Record<string, any>)[key]}
                dropdownItems={(dropdownList as Record<string, any>)[key]}
              />
            ))}
            <button type="submit" className={`${styles.bookingBTN}`}>
              Book a session
            </button>
          </div>
        )}
      </button>
    </nav>
  );
}
