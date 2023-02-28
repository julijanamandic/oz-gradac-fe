
const Contact = () => {

    return (
        
        <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                            <div className="section-title mb-25">
                                <span className="sub-title-three">
                                    Treba Vam<span> Pomoc?</span>
                                </span>
                                <h2>Kontaktirajte nas</h2>
                            </div>
                            <p>
                                Nalazimo se u centru studentskog života, u Studentskom gradu, ispod centralne čitaonice,
                                tako da poslodavcima možemo obezbediti potrebne omladince u najkraćem mogućem roku.

                            </p>
                            <p>

                                Ukoliko se ne snadjete, uvek nas možete kontaktirati na:

                            </p>
                            <div className="faq-contact-info pt-20">

                                <div className="icon">

                                    <i className="fas fa-phone" />

                                </div>

                                <div className="content">

                                    <h6>Telefon</h6>

                                    <a href="callto:+381 (011) 26 73 244">+381 (011) 26 73 244</a>

                                </div>

                            </div>
                            <div className="faq-contact-info pt-20">

                                <div className="icon">

                                    <i className="far fa-envelope" />

                                </div>

                                <div className="content">

                                    <h6>Email</h6>

                                    <a href="mailto:support@gmail.com">ozgradac@gmail.com</a>

                                </div>

                            </div>
                            <div className="faq-contact-info pt-20">

                                <div className="icon">

                                    <i className="fas fa-map-marker-alt" />

                                </div>

                                <div className="content">

                                    <h6>Lokacija</h6>

                                    <span>Bulevar Zorana Djindjica 179, Novi Beograd (Studentski grad)</span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="why-choose-images mt-10 wow fadeInUp delay-0-4s">
                            <img
                                src="assets/images/why-choose/why-choose1.jpg"
                                alt="Why Choose"
                                className="why-choose-one"
                            />
                            <img
                                src="assets/images/why-choose/why-choose2.jpg"
                                alt="Why Choose"
                                className="why-choose-two"
                            />
                            <img
                                src="assets/images/why-choose/why-choose3.jpg"
                                alt="Why Choose"
                                className="why-choose-three"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;