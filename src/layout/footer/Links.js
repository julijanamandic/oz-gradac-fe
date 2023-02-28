import Link from "next/link";

import { Fragment } from "react";

const Links = () => {

    return (
        <div className="col-lg-2 col-md-3 col-sm-4">

            <div className="footer-widget menu-widget">

                <h5 className="footer-title">Brzi Linkovi</h5>

                <ul>
                    <Fragment>

                        <li>

                            <Link href="/">Pocetna</Link>

                        </li>

                        <li>

                            <Link href="/o-nama">O Nama</Link>

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

                    </Fragment>
                </ul>

            </div>

        </div >
    )

}
export default Links;