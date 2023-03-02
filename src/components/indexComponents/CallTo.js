import Link from "next/link";

import Image from "next/legacy/image";

import notification from '../../../public/assets/images/shapes/notification.png';

const CallTo = () => {

    return (
        <section className="call-to-action rel z-2 mt-125 rmt-95">
            <div className="container">
                <div className="call-to-action-inner wow zoomIn delay-0-2s">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="notification rmb-25">
                                <Image
                                    src={notification}
                                    alt="Notification"
                                    priority
                                />
                                <div className="content">
                                    <h4>Trazis posao?</h4>
                                    <p>Postani nas clan i izaberi odgovarajuci posao</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <Link legacyBehavior href="/clanstvo">
                                <a className="theme-btn style-four">
                                    Uclani se <i className="fas fa-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CallTo;