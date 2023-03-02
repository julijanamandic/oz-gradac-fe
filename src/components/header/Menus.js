import Link from "next/link";

import { Other } from "./Menu";

const Menus = () => {

    return (
        <ul className="navigation clearfix d-none d-lg-flex">

            <li className="dropdown ">

                <Link legacyBehavior href="/">

                    <a>Pocetna</a>

                </Link>

            </li>

            <li>

                <Link legacyBehavior href="/o-nama">

                    <a>O nama</a>

                </Link>

            </li>

            <li>

                <Link legacyBehavior href="/poslovi">

                    <a>Poslovi</a>

                </Link>

            </li>
            <li>

                <Link legacyBehavior href="/clanstvo">

                    <a>Clanstvo</a>

                </Link>

            </li>

            <li className="dropdown">

                <Link legacyBehavior href="/kontakt">

                    <a>Kontakt</a>

                </Link>
            </li>

            <li className="dropdown">

                <Link href="/faqs">Ostalo</Link>

                <ul>

                    <Other />

                </ul>

                <div className="dropdown-btn">

                    <span className="fas fa-chevron-down" />

                </div>

            </li>

        </ul>
    )
}
export default Menus;
