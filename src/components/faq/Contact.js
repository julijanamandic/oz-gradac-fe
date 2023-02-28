import Link from "next/link";

const Contact = () => {

    return (
        <section className="faq-form-area rel z-1 pb-125 rpb-95">

            <div className="container">

                <div className="row large-gap align-items-center justify-content-between">

                    <div className="col-lg-5">

                        <div className="faqs-form-content rmb-65 wow fadeInRight delay-0-2s">

                            <div className="section-title mb-25">

                                <span className="sub-title-three">
                                    Imate Neko<span> Pitanje?</span>
                                </span>

                                <h2>Kontaktirajte nas</h2>

                            </div>

                            <p>

                                Ukoliko niste pronašli odgovor na traženo pitanje, kontaktirajte nas
                                i mi cemo Vam odgovoriti u najkracem roku.

                            </p>

                            <Link legacyBehavior href="/kontakt">

                                <a className="theme-btn ">
                                    Kontakt <i className="fas fa-arrow-right" />
                                </a>

                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <img src="assets/images/about/benefit.jpg" alt="Bebefit" />

                    </div>

                </div>

            </div>

        </section>
    )
}
export default Contact;