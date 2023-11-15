"use client";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import styles from "@/app/components/navbar/dropdown.module.css";
import { useState } from "react";

type props = {
  title: string;
  isDropdown: boolean;
  dropdownItems: Array<string> | null;
};

export default function Dropdown({
  title,
  isDropdown = true,
  dropdownItems = [],
}: props) {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div className={`${styles.container}`}>
      {title}
      {isDropdown && !dropdownActive && (
        <div onClick={() => setDropdownActive(true)}>
          <GoTriangleDown />
        </div>
      )}
      {isDropdown && dropdownActive && (
        <div onClick={() => setDropdownActive(false)}>
          <GoTriangleUp />
        </div>
      )}
      {isDropdown && dropdownActive && <div className={`${styles.dropdownList}`}>{dropdownItems?.map((item: string, index: number) => <div key={index}>{item}</div>)}</div>}
    </div>
  );
}
