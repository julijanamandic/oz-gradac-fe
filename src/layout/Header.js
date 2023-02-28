
import { Fragment, useEffect, useState } from "react";

import { stickyNav } from "../utils";

import HeaderTop from "../components/header/HeaderTop";

import HeaderUpper from "../components/header/HeaderUpper";



const Header = ({ header }) => {

  useEffect(() => {

    stickyNav();

  }, []);

  const [navToggle, setNavToggle] = useState(false);


  return (
    <Fragment>

      <header className="main-header header-three">

        <HeaderTop />

        <HeaderUpper navToggle={navToggle} setNavToggle={setNavToggle} />

      </header>

    </Fragment >
  )


};

export default Header;



