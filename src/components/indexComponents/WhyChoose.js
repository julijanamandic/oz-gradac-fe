import Link from "next/link";

const WhyChoose = () => {

    return (
        <section className="why-choose-section pt-120 rpt-90 pb-100 rpb-100">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                            <div className="section-title mb-25">
                                <span className="sub-title-three">
                                    Zasto Iz<span>abrati Nas?</span>
                                </span>
                                <h2>Mi smo lideri u zaposljavanju mladih</h2>
                            </div>
                            <p>
                                Već 20 godina uspešno spajamo poslodavce i mlade, ambiciozne ljude.
                                I zato je Omladinska zadruga Gradac najbolji partner za početak karijere i sticanje prvih radnih iskustava.
                            </p>
                            <ul className="list-style-four pt-5 pb-35">
                                <li>Najveca baza poslova za mlade</li>
                                <li>Svakodnevni oglasi za posao</li>
                                <li>Preko 600 poslodavaca, preko 15000 zadrugara</li>
                            </ul>
                            <Link legacyBehavior href="/o-nama">
                                <a className="theme-btn style-four">
                                    Saznaj vise <i className="fas fa-arrow-right" />
                                </a>
                            </Link>
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
export default WhyChoose;