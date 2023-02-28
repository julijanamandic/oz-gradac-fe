import Link from "next/link";

import { Fragment } from "react";


export const Other = () => (

  <Fragment>

    <li>

      <Link href="/faqs">Cesta pitanja</Link>

    </li>

    <li>

      <Link href="/korisne-informacije">Korisne informacije</Link>

    </li>
    <li>

      <Link href="/kreiraj-post">Kreiraj post</Link>

    </li>

  </Fragment>

);

