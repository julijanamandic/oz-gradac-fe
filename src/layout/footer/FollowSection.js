import FollowIcon from "./FollowIcon";

import Link from "next/link";

const FollowSection = () => {

    return (

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
        </div>
    )
}
export default FollowSection;