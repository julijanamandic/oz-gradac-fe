import Link from "next/link";

import Newsletters from "../components/Newsletters";

import Contact from "./footer/Contact";

import Gallery from "./footer/Gallery";

import Links from "./footer/Links";

import FollowIcon from "./footer/FollowIcon";

import CopyRight from "./footer/CopyRight";

import FooterBottom from "./footer/FooterBottom";


const Footer = ({ footer }) => {

  const scrollTop = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  return (
    
    <footer className="main-footer footer-two bg-blue-two">

      <div className="container">

        <Newsletters />

        <div className="row large-gap justify-content-between text-white pt-85">

          <div className="col-lg-3 col-sm-4">

            <div className="footer-widget about-widget">

              <div className="footer-logo mb-25">

                <Link legacyBehavior href="/">

                  <a>

                    <img src="assets/images/logos/logo-two.png" alt="Logo" />

                  </a>

                </Link>

              </div>

              <p>

                Samo zadovoljni korisnici se vracaju da ponovo koriste nase usluge{" "}

              </p>

              <div className="social-style-one pt-10">

                <FollowIcon />

              </div>

            </div>

          </div>

          <Links />

          <Contact />

          <Gallery />

        </div>

      </div>

      <div className="copyright-area rel">

        <div className="container">

          <div className="copyright-inner">

            <CopyRight />

            <ul className="footer-menu">

              <FooterBottom />

            </ul>

          </div>

        </div>

        {/* Scroll Top Button */}

        <button

          style={{ display: "inline-block" }}

          onClick={() => scrollTop()}

          className="scroll-top scroll-to-target"

          data-target="html"

        >

          <span className="fas fa-angle-double-up" />

        </button>

      </div>

    </footer>
  )

};
export default Footer;
