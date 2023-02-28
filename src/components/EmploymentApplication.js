

const EmploymentApplication = () => {

    return (
        <section className="faq-form-area rel z-1 pt-120 rpt-90 pb-125 rpb-95">

            <div className="container">

                <div className="row large-gap align-items-center justify-content-between">

                    <div className="col-lg-5">

                        <div className="faqs-form-content rmb-65 wow fadeInRight delay-0-2s">

                            <div className="section-title mb-25">

                                <span className="sub-title-two">
                                    Potrebni su Vam<span> ucenici, studenti ili omladinci?</span>
                                </span>

                                <h2>Kontaktirajte nas</h2>

                            </div>

                            <p>

                                Popunite prijavu i prosledite nam vaše kontakt podatke,
                                a mi ćemo Vas u najkraćem mogućem roku kontaktirati radi dobijanja više informacija o vašim potrebama
                                ili nas kontaktirajte putem telefona.

                            </p>

                            <div className="faq-contact-info pt-20">

                                <div className="icon">

                                    <i className="fas fa-phone" />

                                </div>

                                <div className="content">

                                    <h6>Kontakt Telefon</h6>

                                    <a href="callto:+381 (011) 26 73 244">+381 (011) 26 73 244</a>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <form

                            onSubmit={(e) => e.preventDefault()}

                            id="faq-form"

                            className="faq-form wow fadeInLeft delay-0-2s"

                            name="faq-form"

                            action="#"

                            method="post"

                        >

                            <div className="row clearfix ">

                                <div className="col-sm-6">

                                    <div className="form-group">

                                        <label htmlFor="company-name">

                                            <i className="far fa-user" />

                                        </label>

                                        <input

                                            type="text"

                                            id="company-name"

                                            name="company-name"

                                            className="form-control"

                                            placeholder="Naziv firme"

                                        />

                                    </div>

                                </div>

                                <div className="col-sm-6">

                                    <div className="form-group">

                                        <label htmlFor="phone">

                                            <i className="fas fa-phone" />

                                        </label>

                                        <input

                                            type="text"

                                            id="phone"

                                            name="phone"

                                            className="form-control"

                                            placeholder="Kontakt Telefon"


                                        />

                                    </div>

                                </div>

                                <div className="col-sm-6">

                                    <div className="form-group">
                                        <label htmlFor="phone">

                                            <i className="fas fa-map-marker-alt" />

                                        </label>

                                        <input

                                            type="text"

                                            id="address"

                                            name="address"

                                            className="form-control"

                                            placeholder="Adresa Firme"

                                        />

                                    </div>

                                </div>

                                <div className="col-sm-6">

                                    <div className="form-group">

                                        <label htmlFor="faq-email">

                                            <i className="far fa-envelope" />

                                        </label>

                                        <input

                                            type="email"

                                            id="faq-email"

                                            name="faq-email"

                                            className="form-control"

                                            placeholder="Email Adresa"

                                        />

                                    </div>

                                </div>

                                <div className="col-sm-12">

                                    <div className="form-group">

                                        <label htmlFor="message">

                                            <i className="fas fa-pencil-alt" />

                                        </label>

                                        <textarea

                                            name="message"

                                            id="message"

                                            className="form-control"

                                            rows={4}

                                            placeholder="Poruka"

                                        />

                                    </div>

                                </div>

                                <div className="col-sm-12">

                                    <div className="form-group mb-0 form-btn-label">

                                        <button type="submit" className="theme-btn">

                                            Posaljite Poruku <i className="fas fa-arrow-right" />

                                        </button>

                                        <div className="custom-control custom-radio">

                                            <input

                                                type="radio"

                                                className="custom-control-input"

                                                id="privacy-policy"

                                                name="privacy"

                                                required=""

                                            />

                                            <label

                                                className="custom-control-label"

                                                htmlFor="privacy-policy"

                                            >

                                                Slazem se sa pravilima privatnosti

                                            </label>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default EmploymentApplication;