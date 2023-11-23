"use client";
import {
  GoTriangleDown,
  GoTriangleUp,
  GoTriangleLeft,
  GoTriangleRight,
} from "react-icons/go";
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
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  return (
    <div className={`${styles.container}`} onMouseLeave={() => setDropdownActive(false)}>
      <div
        className={`${styles.titleContainer}`}
        onClick={() => setDropdownActive((isActive: boolean) => !isActive)}
        
      >
        <div>{title ?? ""}</div>
        {isDropdown && !dropdownActive && (
          <div className={`${styles.arrow}`}>
            <GoTriangleDown />
            <GoTriangleLeft />
          </div>
        )}
        {isDropdown && dropdownActive && (
          <div className={`${styles.arrow}`}>
            <GoTriangleUp />
            <GoTriangleRight />
          </div>
        )}
      </div>
      {isDropdown && dropdownActive && (
        <div className={`${styles.dropdownList}`}>
          {dropdownItems?.map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
