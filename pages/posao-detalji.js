import Link from "next/link";
import Image from "next/legacy/image";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import coach1 from "../public/assets/images/coachs/coach1.jpg";
import coach2 from "../public/assets/images/coachs/coach2.jpg";
import coach3 from "../public/assets/images/coachs/coach3.jpg";

const PostDetails = () => {

    const categories = ["Ugostiteljstvo", "Call centri", "Laki fizicki poslovi", "Teski fizicki poslovi"]

    return (
        <Layout header={3} footer={4}>
            <PageBanner pageName={"Detalji posla"} />
            <section className="blog-details-area py-130 rpy-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-wrap">
                                <div className="image mb-25 wow fadeInUp delay-0-2s">
                                    <Image
                                        src={coach1}
                                        alt="Blog"
                                        priority />
                                </div>
                                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                                    <li>
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Beograd</span>
                                    </li>
                                    <li>
                                        <i className="far fa-calendar-alt" />{" "}
                                        <Link href="/blog-details">Radni dani 07:30-15:30</Link>
                                    </li>
                                    <li>
                                        <i className="far fa-comments" />{" "}
                                        <Link href="/blog-details">250 din/h</Link>
                                    </li>
                                </ul>
                                <h3 className="title">
                                    Administrativni radnik (iskljucivo na duzi vremenski period)
                                </h3>
                                <p>
                                    Potrebni omladinci do 30 godina za pruzanje informacija,
                                    pracenje i analiziranje podataka kao i izvesavanje o realizaciji prodaje.
                                </p>
                                <p>
                                    - Uslov za prijavu je poznavanje rada na racunaru (Microsoft Office).
                                </p>
                                <p>
                                    - Placena obuka.
                                </p>
                                <p>
                                    - Mogucnost napredovanja.
                                </p>
                                <p>
                                    - Mogucnost strucnog usavrsavanja i stalnog zaposlenja.
                                </p>
                                <p>
                                    Zarada po dogovoru sa poslodavcem
                                </p>
                                <blockquote>
                                    <h4>
                                        Prijave slati na:
                                    </h4>
                                    <div className="icon pb-2">
                                        <i className="fas fa-phone" />
                                        <span className="pl-2">063 210649</span>
                                    </div>
                                    <h6>
                                        Obavezna naznaka za koji se posao prijavljujete
                                    </h6>
                                </blockquote>
                                <div className="tag-share pt-10">
                                    <div className="tag-coulds pb-25">
                                        <h6>Tags</h6>
                                        <Link href="/blog">Momci i devojke</Link>
                                        <Link href="/blog">Na duzi vremenski period</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-sidebar rmt-75">
                                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                                    <h4 className="widget-title">Vrste posla</h4>
                                    <ul>
                                        <li>
                                            <Link href="/poslovi">Administracija</Link>{" "}
                                            <span>(25)</span>
                                        </li>
                                        <li>
                                            <Link href="/poslovi">Ugostiteljstvo</Link>{" "}
                                            <span>(18)</span>
                                        </li>
                                        <li>
                                            <Link href="/poslovi">Laki fizicki poslovi</Link>{" "}
                                            <span>(20)</span>
                                        </li>
                                        <li>
                                            <Link href="/poslovi">Teski fizicki poslovi</Link>{" "}
                                            <span>(20)</span>
                                        </li>
                                        <li>
                                            <Link href="/poslovi">Promocije</Link>{" "}
                                            <span>(6)</span>
                                        </li>
                                        {categories.forEach((category) => {
                                            <li>
                                                <Link href="/blog">{category}</Link>{" "}
                                                <span>(25)</span>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                                    <h4 className="widget-title">Najnoviji oglasi</h4>
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <Image
                                                    src={coach1}
                                                    alt="Course"
                                                    priority
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/posao-detalji">
                                                        Administrativni radnik (student ekonomije)
                                                    </Link>
                                                </h6>
                                                <span>
                                                    Beograd
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <Image
                                                    src={coach2}
                                                    alt="Course"
                                                    priority
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/posao-detalji">
                                                        Sourcing za jednu community platformu
                                                    </Link>
                                                </h6>
                                                <span>
                                                    Beograd
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <Image
                                                    src={coach3}
                                                    alt="Course"
                                                    priority
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/posao-detalji">
                                                        Sankerica/konobarica u jednom restoranu
                                                    </Link>{" "}
                                                </h6>
                                                <span>
                                                    Beograd
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <Image
                                                    src={coach1}
                                                    alt="Course"
                                                    priority
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/posao-detalji">
                                                        Administrativni radnik (iskljucivo na duzi vremenski period)
                                                    </Link>
                                                </h6>
                                                <span>
                                                    Beograd (Merkator)
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image">
                                                <Image
                                                    src={coach2}
                                                    alt="Course"
                                                    priority
                                                />
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <Link href="/posao-detalji">
                                                        Sourcing za jednu community platformu
                                                    </Link>
                                                </h6>
                                                <span>
                                                    Beograd
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default PostDetails;