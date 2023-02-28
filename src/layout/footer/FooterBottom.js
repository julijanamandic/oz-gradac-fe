
import Link from "next/link";

import { Fragment } from "react";

const FooterBottom = () => {

    return (
        <Fragment>

            <li>

                <Link href="/faqs">Cesta Pitanja</Link>

            </li>

            <li>

                <Link href="/korisne-informacije">Korisne Informacije</Link>

            </li>

        </Fragment>
    )

}
export default FooterBottom;
