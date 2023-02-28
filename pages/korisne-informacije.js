import Link from "next/link";
import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";

const Informations = () => {

    return (
        <Layout header={3} footer={3}>
            <PageBanner pageName={"Korisne informacije"} />
            <section className="blog-section-three pt-120 rpt-90">
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <h2>Korisni Tekstovi</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item style-two wow fadeInUp delay-0-2s">
                                <div className="blog-image">
                                    <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                                    <span className="date">
                                        March <span>15</span>
                                    </span>
                                </div>
                                <div className="blog-content">
                                    <div className="content">
                                        <h4>
                                            <Link href="/blog-details">
                                                Kako da napišem dobar CV i motivaciono pismo
                                            </Link>
                                        </h4>
                                        <p>
                                            Kako da napišete dobar CV i motivaciono pismo koji će se razlikovati u gomili drugih?
                                            Kako da napišete CV koji će skrenuti pažnju baš na vas?
                                        </p>
                                        <Link legacyBehavior href="/blog-details">
                                            <a className="read-more">
                                                Procitaj vise <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog-item style-two image-left wow fadeInUp delay-0-4s">
                                <div className="blog-image">
                                    <img src="assets/images/blog/blog5.jpg" alt="Blog" />
                                    <span className="date">
                                        March <span>23</span>
                                    </span>
                                </div>
                                <div className="blog-content">
                                    <div className="content">
                                        <h4>
                                            <Link href="/blog-details">
                                                Saveti kako da unapredite komunikacione vestine
                                            </Link>
                                        </h4>
                                        <p>
                                            Dobre komunikacione veštine su ono što svi poslodavci traže i jako cene kod svojih zaposlenih.
                                            Zato je vrlo značajno da što pre shvatite bitnost dobrih komunikacionih veština i da se posvetite njihovom usavršavanju.
                                        </p>
                                        <Link legacyBehavior href="/blog-details">
                                            <a className="read-more">
                                                Procitaj vise <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-item style-two image-left wow fadeInUp delay-0-6s">
                                <div className="blog-image">
                                    <img src="assets/images/blog/blog6.jpg" alt="Blog" />
                                    <span className="date">
                                        April <span>04</span>
                                    </span>
                                </div>
                                <div className="blog-content">
                                    <div className="content">
                                        <h4>
                                            <Link legacyBehavior href="/blog-details">
                                                Zašto je važno ići na praksu tokom studiranja?
                                            </Link>
                                        </h4>
                                        <p>
                                            Sticanje profesionalnog iskustva u određenoj oblasti još tokom studiranja ima veliki značaj za dalju vašu karijeru.
                                            Bilo da ste na početku svojih studija ili na završnoj godini praksa, internship ili stažiranje mogu biti ključni za pokretanje vaše karijere
                                        </p>
                                        <Link legacyBehavior href="/blog-details">
                                            <a className="read-more">
                                                Procitaj vise <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-100 rmt-70" />
                </div>
            </section>
        </Layout>
    )

}
export default Informations;