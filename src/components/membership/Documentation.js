
import { Nav, Tab } from "react-bootstrap";

import Application from "../Application";

const Documentation = () => {

    return (
        <section className="product-details pt-55 rpt-100">
            <div className="container">
                <div className="section-title">

                    <span className="sub-title-two">Potrebna dokumentacija</span>

                </div>
                <Tab.Container defaultActiveKey={"ucenici"}>
                    <Nav
                        as={"ul"}
                        className="nav border-bottom-1 product-information-tab pt-32 mb-40"
                    >
                        <Nav.Item as={"li"}>
                            <Nav.Link eventKey={"ucenici"} href="#ucenici">
                                Ucenici
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"}>
                            <Nav.Link eventKey={"studenti"} href="#studenti">
                                Studenti
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"}>
                            <Nav.Link eventKey={"nezaposlena-lica"} href="#nezaposlena-lica">
                                Nezaposlena lica
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
                        <Tab.Pane className="tab-pane" eventKey="ucenici">
                            <p>
                                Ucenici sa navrsenih minimum 15 godina.
                            </p>
                            <ul className="list-style-two mt-25 mb-25">
                                <li>Licna karta</li>
                                <li>Potvrda iz skole za tekucu skolsku godinu</li>
                            </ul>
                            <p>
                                Ukoliko želite da se elektronski učlanite u zadrugu potrebno je da popunite prijavu za e-učlanjenje.
                                Nakon toga vi ste automatski član OZ Gradac i prilikom prvog radnog angažovanja neophodno je da lično dođete u prostorije zadruge
                                radi potpisivanja zahteva za učlanjenje i preuzimanja članske karte.
                            </p>
                            <Application />
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane" eventKey="studenti">
                            <p>
                                Studenti do 26 godina starosti:
                            </p>
                            <ul className="list-style-two mt-25 mb-25">
                                <li>Licna karta</li>
                                <li>Potvrda sa fakulteta ili Indeks (fotokopija prve strane i overenog semestra tekuće godine)</li>
                                <li>Apsolventi moraju doneti potvrdu sa fakuteta za tekuću godinu</li>
                            </ul>
                            <p>
                                Ukoliko želite da se elektronski učlanite u zadrugu potrebno je da popunite prijavu za e-učlanjenje.
                                Nakon toga vi ste automatski član OZ Gradac i prilikom prvog radnog angažovanja neophodno je da lično dođete u prostorije zadruge
                                radi potpisivanja zahteva za učlanjenje i preuzimanja članske karte.
                            </p>
                            <Application />
                        </Tab.Pane>
                        <Tab.Pane className="tab-pane" eventKey="nezaposlena-lica">
                            <p>
                                Studenti do 26 godina starosti:
                            </p>
                            <ul className="list-style-two mt-25 mb-25">
                                <li>Licna karta</li>
                            </ul>
                            <h6>Napomena: lica koja ostvaruju novčanu naknadu, koji su korisnici porodične penzije ili su u radnom odnosu ne mogu biti članovi zadruge.</h6>

                            <p>
                                Ukoliko želite da se elektronski učlanite u zadrugu potrebno je da popunite prijavu za e-učlanjenje.
                                Nakon toga vi ste automatski član OZ Gradac i prilikom prvog radnog angažovanja neophodno je da lično dođete u prostorije zadruge
                                radi potpisivanja zahteva za učlanjenje i preuzimanja članske karte.
                            </p>
                            <Application />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </section>
    )
}
export default Documentation;