import { useState } from "react";

import WellernAccordion from "../WellernAccordion";

import { Accordion } from "react-bootstrap";

const Faqs = () => {

    const [active, setActive] = useState(`collapse1`);
    const onClick = (value) => {
        console.log(value);
        setActive(value === active ? "" : value);
    };

    return (
        <section className="faqs-section pt-120 rpt-85 pb-110 rpb-85 wow fadeInUp delay-0-2s">

            <div className="container">

                <div className="section-title mb-35">

                    <span className="sub-title-three">
                        Imate Neko<span> Pitanje?</span>
                    </span>

                    <h2>Cesta pitanja</h2>

                </div>
                <Accordion
                    className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                    id="course-faq"
                    defaultActiveKey="collapse1"
                >
                    <WellernAccordion
                        eventName={"collapse1"}
                        title={"Ko može da radi preko omladinske zadruge?"}
                        active={active}
                        onClick={() => onClick("collapse1")}
                    >
                        <ul className="course-video-list">

                            <li>
                                <span className="title">
                                    <p>Preko omladinske zadruge može raditi svaki državljanin Republike Srbije između 15 i 30 godina starosti.</p>
                                    <p>Zakon prepoznaje dve kategorije:</p>
                                    <p>
                                        1. Osobe na školovanju do 26 godina starosti (studenti i učenici)
                                    </p>
                                    <p>
                                        2. Nezaposlene osobe do 30 godina starosti
                                    </p>
                                    <p>Strani državljani mogu raditi isključivo sa statusom učenika ili studenta.</p>
                                </span>

                            </li>
                        </ul>
                    </WellernAccordion>
                    <WellernAccordion
                        title={"Da li preko omladinske zadruge radnicima ide radni staž? "}
                        eventName={"collaps2"}
                        active={active}
                        onClick={() => onClick("collaps2")}
                    >
                        <ul className="course-video-list">
                            <li>
                                <span className="title">
                                    <p>Radni staž imaju nezaposlene osobe proporcionalno broju radnih dana kod poslodavca.</p>
                                    <p>Studentima i učenicima ne ide radni staž.</p>
                                </span>
                            </li>
                        </ul>
                    </WellernAccordion>
                    <WellernAccordion
                        title={"Da li strani državljani mogu raditi preko omladinske zadruge? "}
                        eventName={"collaps3"}
                        active={active}
                        onClick={() => onClick("collaps3")}
                    >
                        <ul className="course-video-list">
                            <li>
                                <span className="title">
                                    <p>Ukoliko je omladinac nerezident, može raditi isključivo sa statusom učenika ili studenta.
                                        Potrebna dokumenta za nerezidenta: lična karta/pasoš, potvrda da je student ili učenik,
                                        kopija belog kartona, swift za uplatu na račun (taj papir možete dobiti u Vašoj banci) i tekući nerezidentski račun koji glasi na ime omladinca.</p>
                                </span>
                            </li>
                        </ul>
                    </WellernAccordion>
                    <WellernAccordion
                        title={"Da li se isplate vrše odmah po završetku angažovanja? "}
                        eventName={"collaps4"}
                        active={active}
                        onClick={() => onClick("collaps4")}
                    >
                        <ul className="course-video-list">
                            <li>
                                <span className="title">
                                    <p>
                                        Isplata zarade je najčešće na mesečnom nivou, u zavisnosti od zahteva poslodavca.
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </WellernAccordion>
                    <WellernAccordion
                        title={"Da li mogu podici novac u poslovnici?"}
                        eventName={"collaps5"}
                        active={active}
                        onClick={() => onClick("collaps5")}
                    >
                        <ul className="course-video-list">
                            <li>
                                <span className="title">
                                    <p>
                                        Sve isplate vrše se isključivo putem dinarskog tekućeg računa.
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </WellernAccordion>
                </Accordion>

            </div>
        </section>
    )
}
export default Faqs;