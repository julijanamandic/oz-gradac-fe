

const ContactForm = () => {

    return (
        <section className="contact-form-area wow fadeInUp delay-0-2s">

            <div className="container">

                <form

                    onSubmit={(e) => e.preventDefault()}

                    id="contact-form"

                    className="contact-form p-50 z-1 rel"

                    name="contact-form"

                    action="#"

                    method="post"

                >

                    <div className="section-title text-center mb-50">

                        <span className="sub-title-three">
                            Imate Neko<span> Pitanje?</span>
                        </span>
                        <h2>Posaljite Nam Poruku</h2>

                    </div>

                    <div className="row mt-25">

                        <div className="col-md-4">

                            <div className="form-group">

                                <input

                                    type="text"

                                    id="full-name"

                                    name="full-name"

                                    className="form-control"

                                    defaultValue=""

                                    placeholder="Ime i prezime"

                                    required=""

                                />

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group">

                                <input

                                    type="email"

                                    id="email-address"

                                    name="email"

                                    className="form-control"

                                    defaultValue=""

                                    placeholder="Email"

                                    required=""

                                />

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group">

                                <input

                                    type="text"

                                    id="phone"

                                    name="phone"

                                    className="form-control"

                                    defaultValue=""

                                    placeholder="Telefon"

                                    required=""

                                />

                            </div>

                        </div>

                        <div className="col-md-12">

                            <div className="form-group">

                                <textarea

                                    name="message"

                                    id="message"

                                    className="form-control"

                                    rows={4}

                                    placeholder="Napisi poruku"

                                    required=""

                                    defaultValue={""}

                                />

                            </div>

                        </div>

                        <div className="col-md-12">

                            <div className="form-group text-center mb-0">
                                <button type="submit" className="theme-btn style-four">
                                    posaljite poruku <i className="fas fa-arrow-right" />
                                </button>
                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </section>
    )
}
export default ContactForm;