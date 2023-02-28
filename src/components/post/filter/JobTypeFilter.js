import Link from "next/link";

const JobTypeFilter = () => {

    return (

        <div className="widget widget-menu wow fadeInUp delay-0-4s">

            <h4 className="widget-title">Vrsta posla</h4>

            <ul>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Laki fizicki poslovi </a>

                    </Link>{" "}

                    <span>(25)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Teski fizicki poslovi </a>

                    </Link>{" "}

                    <span>(07)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Ugostiteljstvo </a>

                    </Link>{" "}

                    <span>(12)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Administracija </a>

                    </Link>{" "}

                    <span>(55)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Call centri </a>

                    </Link>{" "}

                    <span>(14)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Promocije </a>

                    </Link>{" "}

                    <span>(30)</span>

                </li>

                <li>

                    <Link legacyBehavior href="/course-list">

                        <a>Host </a>

                    </Link>{" "}

                    <span>(18)</span>

                </li>

            </ul>

        </div>
    )
}
export default JobTypeFilter;