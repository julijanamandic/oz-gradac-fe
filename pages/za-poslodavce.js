import Layout from "@/src/layout/Layout";
import Image from "next/legacy/image";
import PageBanner from "@/src/components/PageBanner";
import { Nav, Tab } from "react-bootstrap";
import EmploymentApplication from "@/src/components/EmploymentApplication";

import benefit from '../public/assets/images/about/benefit.jpg';
import gallery6 from '../public/assets/images/gallery/gallery6.jpg';
import whyChoose2 from '../public/assets/images/why-choose/why-choose2.jpg';

const ForEmployment = () => {
    return (
        <Layout header={3} footer={4}>
            <PageBanner pageName={"Za poslodavce"} />
            <section className="benefit-work-process rel z-2 pt-120 rpt-90 pb-120 rpb-90">

                <div className="container">

                    <div className="section-title mb-50">

                        <span className="sub-title-two">
                            Trazite radnike<span> preko omladinske zadruge?</span>
                        </span>

                        <h2>Na pravom ste mestu</h2>

                    </div>

                    <div className="row justify-content-between align-items-center">


                        <div className="col-lg-6">

                            <div className="bebefit-image rmb-75 wow fadeInRight delay-0-2s">

                                <Image
                                    src={benefit}
                                    alt="Bebefit"
                                    priority
                                />
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="about-page-content wow fadeInLeft delay-0-2s">
                                <p>

                                    Ukoliko su vašoj firmi potrebni radnici na privremenim i povremenim poslovima ili
                                    usled povećanog obima posla na svim poslovima za koje se ne zasniva radni odnos,
                                    angažovanje pouzdane radne snage preko Omladinske zadruge Gradac je pravo rešenje za vas.

                                </p>
                                <p>
                                    Nalazimo se u centru studentskog života, u Studentskom gradu i zahvaljujući
                                    tome u mogućnosti smo da u kratkom roku obezbedimo omladince koji su Vam neophodni za obavljanje poslova.
                                </p>
                                <p>Koristeći naše usluge klijenti obezbeđuju sebi brojne prednosti:</p>
                                <ul className="list-style-two mt-25 mb-25">
                                    <li> Smanjenje troškova rada</li>
                                    <li> Velika baza kvalitetnih kadrova</li>
                                    <li> Kvalitetna i brza usluga</li>
                                    <li> Oglašavanje radnih pozicija</li>
                                    <li> Predselekvcija i selekcija kandidata</li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className="coach-section-two bg-light-two rel z-1 pt-150 rpt-150 pb-130 rpb-100">
                <div className="container for-circle rpt-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="rmb-80 wow fadeInUp delay-0-2s">
                                <div className="section-title mb-25">
                                    <span className="sub-title-two">
                                        Zasto izabrati nas?
                                    </span>
                                    <h2>Garantujemo brzinu, profesionalizam i odgovornost u odabiru radne snage!</h2>
                                </div>
                                <p>
                                    Naš primarni cilj je brzo i efikasno pružanje odgovarajućih kadrovskih rešenja.
                                    Suština našeg rada je pronaći pravog kandidata za određeno radno mesto kod Vas.
                                </p>
                                <p>Omladinska zadruga Gradac umesto Vas obavlja:</p>
                                <ul className="list-style-two mt-25 mb-25">
                                    <li> Izrada ugovora</li>
                                    <li> Evidencija radnih sati i dana</li>
                                    <li> Prijave i odjave na obavezno socijalno osiguranje</li>
                                    <li> Otvaranje zdravstvenih knjižica</li>
                                    <li> Izrada M4 obrasca</li>
                                    <li> Obračun i isplata naknada zarada</li>
                                    <li> Podnošenje poreske prijave (PPP PD) uplata poreza i doprinosa</li>
                                    <li> Vodimo kompletnu analitiku angažovanih zadrugara</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="why-choose-images mt-10 wow fadeInUp delay-0-4s">
                                <div className="why-choose-one">
                                    <Image
                                        src={gallery6}
                                        alt="Why Choose"
                                        priority
                                    />
                                </div>
                                <div className="why-choose-two">
                                    <Image
                                        src={whyChoose2}
                                        alt="Why Choose"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-details pt-55 rpt-100">
                <div className="container">
                    <div className="section-title">

                        <span className="sub-title-two">Kalkulator zarada</span>

                    </div>
                    <Tab.Container defaultActiveKey={"ucenici-i-studenti"}>
                        <Nav
                            as={"ul"}
                            className="nav border-bottom-1 product-information-tab pt-32 mb-40"
                        >
                            <Nav.Item as={"li"}>
                                <Nav.Link eventKey={"ucenici-i-studenti"} href="#ucenici-i-studenti">
                                    Ucenici i studenti do 26 godina
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as={"li"}>
                                <Nav.Link eventKey={"nezaposlena-lica"} href="#nezaposlena-lica">
                                    Nezaposlena lica do 30 godina
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
                            <Tab.Pane className="tab-pane" eventKey="ucenici-i-studenti">
                                <div className="row mt-25">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                className="form-control"
                                                placeholder="Neto iznos"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <b>Bruto za uplatu:</b>
                                </p>

                            </Tab.Pane>

                            <Tab.Pane className="tab-pane" eventKey="nezaposlena-lica">
                                <div className="row mt-25">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                className="form-control"
                                                placeholder="Neto iznos"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <b>Bruto za uplatu:</b>
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
            <EmploymentApplication />
        </Layout>
    )
}
export default ForEmployment;