import Image from "next/legacy/image";
import rulesCondition1 from '../../../public/assets/images/about/rules-condition1.jpg';
import rulesConditio2 from '../../../public/assets/images/about/rules-condition2.jpg';

const RulesAndConditions = () => {

    return (
        <section className="rules-condition-area pt-130 rpt-90">
            <div className="container">
                <div className="row align-items-center large-gap">
                    <div className="col-lg-5">
                        <div className="rules-condition-content rmb-50 wow fadeInLeft delay-0-2s">
                            <div className="section-title">
                                <span className="sub-title-three">
                                    Pravila i<span> Uslovi</span>
                                </span>
                                <h2>Kako postati nas clan</h2>
                            </div>
                            <ul className="list-style-three pt-10">
                                <li>
                                    <div className="content">
                                        <p>
                                            Član zadruge može biti učenik, student ili nezaposleno lice starosti od 15 do 30 godina.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>
                                            Za učlanjenje u Zadrugu neophodno je lično doći u prostorije Zadruge i sa sobom poneti odgovarajuca dokumena
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h5>Članarina iznosi 400 dinara i traje do isteka kalendarske godine.</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="rules-condition-image-part wow fadeInRight delay-0-2s">
                            <div className="row align-items-center">
                                <div className="col-7">
                                    <Image
                                        src={rulesCondition1}
                                        alt="Rules"
                                        priority
                                    />
                                </div>
                                <div className="col-5">
                                    <Image
                                        src={rulesConditio2}
                                        alt="Rules"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RulesAndConditions;