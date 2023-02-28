import Link from "next/link";

const Post = ({ title, price, workTime, location, img, category }) => {
    return (
        <div className="coach-item wow fadeInUp delay-0-4s">

            <div className="coach-image">

                <Link legacyBehavior href="/course-grid">

                    <a className="category">{category}</a>

                </Link>

                <img

                    src={img}

                    alt="Coach"

                />

            </div>

            <div className="coach-content">

                <i className="fas fa-map-marker-alt" />{" "}
                <span className="label">{location}</span>
                <h4>

                    <Link href="/posao-detalji">

                        {title}

                    </Link>

                </h4>

                <div>
                    <i className="far fa-calendar-alt post-icon" />{" "}
                    <span className="pl-2"> {workTime}</span>
                </div>
                <div>
                    <i className="far fa-file-alt post-icon" />
                    <span className="pl-2"> {price}</span>
                </div>
                <hr />

                <div className="widget-tag-cloud wow fadeInUp delay-0-2s">
                    <div className="tag-coulds">
                        <Link href="/blog">Momci i devojke</Link>
                        <Link href="/blog">Na duzi vremenski period</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Post;