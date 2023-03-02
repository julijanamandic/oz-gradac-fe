import Link from "next/link";

import { useState } from "react";

import { Other } from "./Menu";



const MobileHeader = () => {

  const [activeMenu, setActiveMenu] = useState("");

  const activeMenuSet = (value) =>

    setActiveMenu(activeMenu === value ? "" : value),

    activeLi = (value) =>

      value === activeMenu ? { display: "block" } : { display: "none" };

  return (

    <ul className="navigation clearfix d-block d-lg-none mobile-header">

      <li>
        <Link href="/">Pocetna</Link>
      </li>

      <li>

        <Link href="/o-nama">O nama</Link>

      </li>

      <li>
        <Link href="/poslovi">Poslovi</Link>
      </li>

      <li>
        <Link href="/clanstvo">Clanstvo</Link>
      </li>
      <li>
        <Link href="/kontakt">Kontakt</Link>
      </li>

      <li className="dropdown">

        <Link href="/faqs">Ostalo</Link>

        <ul style={activeLi("Ostalo")}>

          <Other />

        </ul>

        <div className="dropdown-btn" onClick={() => activeMenuSet("Ostalo")}>

          <span className="fas fa-chevron-down" />

        </div>

      </li>
      <li>
        <div className="slider-btns rm-10">
          <Link href="/za-poslodavce" className="theme-btn style-four">
            ZA POSLODAVCE <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </li>

    </ul>
  );

};

export default MobileHeader;