import Link from "next/link";

import Image from "next/legacy/image";

import logoBB from '../../public/assets/images/client-logos/logoBB.png';

const PartnerSection = () => {
    return (
        <section className="partner-section rel z-1 pt-75 rpt-75 pb-75 rpb-55">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="categories-content mb-50 wow fadeInRight delay-0-2s">
                            <div className="section-title mb-25">
                                <span className="sub-title-three">
                                    Globalni<span> Partneri</span>
                                </span>
                                <h2>We’ve More Then 235+ Global Partners</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="logo-inner style-two wow fadeInLeft delay-0-2s">
                            <div className="logo-item">
                                <Link href="/about">
                                    <Image
                                        src={logoBB}
                                        alt="Client Logo"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PartnerSection;