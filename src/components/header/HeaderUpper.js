import Link from "next/link";
import Image from "next/legacy/image";
import Menus from "./Menus";
import MobileHeader from "./MobileHeader";
import logo from '../../../public/assets/images/logos/logo-two.png';

const HeaderUpper = ({ navToggle, setNavToggle }) => {

    return (
        <div className="header-upper">

            <div className="container clearfix">

                <div className="header-inner d-flex align-items-center justify-content-between">

                    <div className="logo-outer d-lg-flex align-items-center">

                        <div className="logo">

                            <Link legacyBehavior href="/">

                                <a>

                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        title="Logo"
                                        priority
                                    />

                                </a>

                            </Link>

                        </div>

                    </div>

                    <div className="nav-outer clearfix">

                        {/* Main Menu */}

                        <nav className="main-menu navbar-expand-lg">

                            <div className="navbar-header">

                                <div className="mobile-logo">

                                    <Link legacyBehavior href="/">

                                        <a>

                                            <Image
                                                src={logo}
                                                alt="Logo"
                                                title="Logo"
                                                priority
                                            />

                                        </a>

                                    </Link>

                                </div>

                                {/* Toggle Button */}

                                <button

                                    type="button"

                                    className="navbar-toggle"

                                    data-toggle="collapse"

                                    data-target=".navbar-collapse"

                                    onClick={() => setNavToggle(!navToggle)}

                                >

                                    <span className="icon-bar" />

                                    <span className="icon-bar" />

                                    <span className="icon-bar" />

                                </button>

                            </div>

                            <div

                                className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""

                                    }`}

                            >

                                <Menus />

                                <MobileHeader />

                            </div>

                        </nav>

                        {/* Main Menu End*/}

                    </div>

                    {/* Menu Button */}
                    <div className="menu-btns d-lg-flex d-none align-items-center">
                        <Link legacyBehavior href="/za-poslodavce">

                            <a className="theme-btn style-four">

                                Za poslodavce <i className="fas fa-arrow-right" />

                            </a>

                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default HeaderUpper;