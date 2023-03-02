import Link from "next/link";
import Image from "next/legacy/image";
import banner from '../../public/assets/images/banner.jpg';
import circleOne from '../../public/assets/images/shapes/circle-one.png';
import circleTwo from '../../public/assets/images/shapes/circle-two.png';

const PageBanner = ({ pageTitle, pageName }) => {

  return (

    <section

      className="page-banner-area rel z-1 text-white text-center"

    >
      <Image
        src={banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="container">

        <div className="banner-inner rpt-10">

          <h2 className="page-title wow fadeInUp delay-0-2s">

            {pageTitle ? pageTitle : pageName}

          </h2>

          <nav aria-label="breadcrumb">

            <ol className="breadcrumb wow fadeInUp delay-0-4s">

              <li className="breadcrumb-item">

                <Link href="/">

                  Pocetna

                </Link>

              </li>

              <li className="breadcrumb-item active">{pageName}</li>

            </ol>

          </nav>

        </div>

      </div>

      <div className="circle-one">
        <Image
          src={circleOne}
          alt="Circle"
          priority
        />
      </div>

      <div className="circle-two">
        <Image
          src={circleTwo}
          alt="Circle"
          priority
        />
      </div>

    </section>

  );

};

export default PageBanner;
