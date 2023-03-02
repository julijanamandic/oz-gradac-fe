import Image from "next/legacy/image";
import benefit from '../../../public/assets/images/about/benefit.jpg';

const Services = () => {

    return (

        <section className="benefit-work-process rel z-2 pt-120 rpt-90 pb-120 rpb-90">

            <div className="container">

                <div className="section-title text-center mb-50">

                    <span className="sub-title-three">
                        Zasto Izab<span>rati Nas? </span>
                    </span>

                    <h2>Zapocni Sa Nama Svoju Karijeru</h2>

                </div>

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <div className="bebefit-image rmb-75 wow fadeInRight delay-0-2s">

                            <Image
                                src={benefit}
                                alt="Benefit"
                                priority
                            />

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="bebefit-work-steps wow fadeInLeft delay-0-2s">

                            <div className="work-step-item">

                                <span className="number">01</span>

                                <div className="content">

                                    <h4>Studentski i Honorarni Poslovi</h4>

                                    <p>
                                        Omladinska zadruga Gradac je najbolje mesto za pronalazak honorarnog posla tokom studija.
                                        Na našem portalu, svakog dana objavljujemo nove poslove. Nemoj da propustiš priliku!
                                    </p>

                                </div>

                            </div>

                            <div className="work-step-item">

                                <span className="number">02</span>

                                <div className="content">

                                    <h4>Prakse</h4>

                                    <p>
                                        Sada je pravi momenat da se uključiš u program prakse.
                                        Mi nudimo različite prilike za obavljanje prakse kako u domaćim kompanijama tako i u multinacionalnim korporacijama.
                                    </p>

                                </div>

                            </div>

                            <div className="work-step-item">

                                <span className="number">03</span>

                                <div className="content">

                                    <h4>Prvi Posao i Pocetne Pozicije</h4>

                                    <p>Teško ti je da nađeš prvi posao?
                                        Ne želiš bilo koji posao, već pravi! Mi u razumemo koliko je izazovno pronaći prvi posao nakon diplomiranja.
                                        Naš zadatak je da ti pomognemo da započneš karijeru u omiljenoj kompaniji
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default Services;