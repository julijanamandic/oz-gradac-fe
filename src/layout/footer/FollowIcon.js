import { Fragment } from "react";

import Link from "next/link";

const FollowIcon = () => {

    return (
        <Fragment>

            <p><b>Na</b></p>

            <Link legacyBehavior href="/contact">

                <a>

                    <i className="fab fa-instagram" />

                </a>

            </Link>

            <p><b>dostupni : 00 - 24h</b></p>

        </Fragment>
    )

}
export default FollowIcon;