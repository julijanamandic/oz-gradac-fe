import Image from 'next/legacy/image';

import aboutThree from '../../../public/assets/images/about/about-three.jpg';

import aboutThreeIcon from '../../../public/assets/images/about/about-three-icon.png';

const About = () => {
    return (
        <section className="about-section-three pt-90 rpt-70">
            <div className="container">
                <div className="row large-gap align-items-center">
                    <div className="col-lg-6">
                        <div className="about-three-image rmb-65 wow fadeInUp delay-0-2s">
                            <Image
                                src={aboutThree}
                                alt="About"
                                layout='responsive'
                                priority
                            />
                            <div className="about-three-image-content bg-light-blue rel text-white br-10">
                                <Image
                                    src={aboutThreeIcon}
                                    alt="About icon"
                                    priority
                                />
                                <span className="counter-number">
                                    <span />
                                </span>
                                <h4>Zadovoljni poslodavci i zadrugari</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content-three wow fadeInUp delay-0-4s">
                            <div className="section-title mb-40">
                                <span className="sub-title-three mb-25">
                                    Nase<span> Usluge</span>
                                </span>
                                <h2>Zapocni svoju karijeru sa nama</h2>
                            </div>
                            <div className="feature-five-item">
                                <div className="icon">

                                    <i className="fas fa-check" />

                                </div>
                                <div className="content">
                                    <h4>Studentski i honorarni poslovi</h4>
                                    <p>
                                        Omladinska zadruga Gradac je najbolje mesto za pronalazak honorarnog posla tokom studija.
                                        Na na??em portalu, svakog dana objavljujemo nove poslove. Nemoj da propusti?? priliku!
                                    </p>
                                </div>

                            </div>
                            <div className="feature-five-item">
                                <div className="icon">

                                    <i className="fas fa-check" />

                                </div>
                                <div className="content">
                                    <h4>Prakse</h4>
                                    <p>
                                        Sada je pravi momenat da se uklju??i?? u program prakse.
                                        Mi nudimo razli??ite prilike za obavljanje prakse kako u doma??im kompanijama tako i u multinacionalnim korporacijama.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-five-item">
                                <div className="icon">

                                    <i className="fas fa-check" />

                                </div>
                                <div className="content">
                                    <h4>Prvi posao i pocetne pozicije</h4>
                                    <p>Te??ko ti je da na??e?? prvi posao?
                                        Ne ??eli?? bilo koji posao, ve?? pravi! Mi u razumemo koliko je izazovno pronac??i prvi posao nakon diplomiranja.
                                        Na?? zadatak je da ti pomognemo da zapo??ne?? karijeru u omiljenoj kompaniji</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;