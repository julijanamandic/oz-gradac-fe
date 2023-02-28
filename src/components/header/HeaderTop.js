import Link from "next/link";

const HeaderTop = () => {

    return (
        <div className="header-top bg-light-blue text-white">

            <div className="container clearfix">

                <div className="top-inner">

                    <div className="top-left">

                        <p>

                            <i className="far fa-clock" /> <b>Radno vreme</b> : Ponedeljak -

                            Petak, 08 - 16h (Sreda, 08 - 18h)

                        </p>

                        <p>

                            <i className="fas fa-phone" /> <b>Telefon</b> :{" "}

                            <a href="callto:+381 (011) 26 73 244">+381 (011) 26 73 244</a>

                        </p>

                    </div>

                    <div className="top-right">

                        <div className="social-style-two">
                            <p><b>Na</b></p>
                            <Link href="/contact">

                                <i className="fab fa-instagram" />

                            </Link>
                            <p><b>dostupni : 00 - 24h</b></p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default HeaderTop;