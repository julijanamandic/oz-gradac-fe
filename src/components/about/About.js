import Counter from "../Counter";

const About = () => {

    return (

        <section className="coach-section-two bg-light-two pt-120 rpt-90 pb-120 rpb-90">

            <div className="container for-circle">

                <div className="row align-items-center large-gap">

                    <div className="col-lg-5">

                        <div className="about-page-content wow fadeInLeft delay-0-2s">

                            <div className="section-title mb-25">
                                <span className="sub-title-three">
                                    O<span> Nama</span>
                                </span>
                                <h2>Mi smo lideri u zaposljavanju mladih</h2>
                            </div>

                            <p>

                                Osnovani smo 2000. godine sa jasnom vizijom i ciljem da mlade i ambiciozne studente spojimo
                                sa uspešnim poslodavcima i omogućimo im da sopstvenim radom obezbede dodatna sredstva za svoje potrebe.

                            </p>

                            <b>

                                U veoma kratkom roku svojim profesionalnim, odgovornim i posvećenim radom izgradili smo poverenje prestižnih poslodavaca.
                                Posebno smo ponosni na zadovoljne članove, omladince,
                                koji su u Omladinskoj zadruzi Gradac prepoznali mogućnost da pronađu adekvatan posao u skladu sa svojim obrazovanjem i shodno svojim sposobnostima.

                            </b>

                        </div>

                    </div>

                    <div className="col-lg-5">

                        <div className="join-our-team-image-part why-choose-images pt-5 wow fadeInRight delay-0-2s">

                            <div className="image-one">

                                <img

                                    src="assets/images/instructor/join-team1.jpg"

                                    alt="Join Our Team"

                                />

                            </div>

                            <div className="image-two">

                                <img

                                    src="assets/images/instructor/join-team2.jpg"

                                    alt="Join Our Team"

                                />

                                <img

                                    src="assets/images/instructor/join-team3.jpg"

                                    alt="Join Our Team"

                                />

                            </div>

                            <div className="years-of-experience">

                                <b>23</b>

                                <span>Godine Iskustava</span>

                            </div>

                            <span className="bg-text">coach</span>

                        </div>

                    </div>

                    <div className="col-lg-2">

                        <div className="counter-wrap style-two wow fadeInRight delay-0-4s">

                            <div className="success-item">

                                <span

                                    className="count-text plus"

                                    data-speed={3000}

                                    data-stop={500}

                                >

                                    <Counter end={500} />

                                </span>

                                <span>Profesionalnih Usluga</span>

                            </div>

                            <div className="success-item">

                                <span

                                    className="count-text plus"

                                    data-speed={3000}

                                    data-stop={1000}

                                >

                                    <Counter end={1000} />

                                </span>

                                <span>Clanova</span>

                            </div>

                            <div className="success-item">

                                <span

                                    className="count-text percent"

                                    data-speed={3000}

                                    data-stop={99}

                                >

                                    <Counter end={100} />

                                </span>

                                <span>Zadovoljnih Klijenata</span>

                            </div>

                            <div className="success-item">

                                <span

                                    className="count-text plus"

                                    data-speed={3000}

                                    data-stop={83}

                                >

                                    <Counter end={83} />

                                </span>

                                <span>Awards Winning</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default About;