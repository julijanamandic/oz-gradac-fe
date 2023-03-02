import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import circleOne from '../../../public/assets/images/shapes/circle-one.png';
import circleThree from '../../../public/assets/images/shapes/circle-three.png';

const Index3Slider = () => {

  const [active, setActive] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevState) => (active == 3 ? 1 : prevState + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  console.log(active);
  return (
    <section className="slider-section bg-dark">
      <div className="main-slider">
        <div
          className={`slider-item ${active == 1 ? "slick-active" : ""}`}
          style={{ backgroundImage: "url(assets/images/slider/slide1.jpg)" }}
        >
          <div className="container">
            <div className="slider-content">
              <div className="section-title mb-25">
                <span className="sub-title-two">
                  Dobrodosli u Omladinsku Zadrugu Gradac
                </span>
                <h2>Trazis Posao? Na Pravom Si Mestu</h2>
              </div>
              <div className="slider-btns">
                <Link href="/poslovi" className="theme-btn style-four">
                  Pogledaj Oglase <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`slider-item ${active == 2 ? "slick-active" : ""}`}
          style={{ backgroundImage: "url(assets/images/slider/slide2.jpg)" }}
        >
          <div className="container">
            <div className="slider-content">
              <span className="sub-title-two">
                Dobrodosli u Omladinsku Zadrugu Gradac
              </span>
              <h2>Trazis Posao? Na Pravom Si Mestu</h2>
              <div className="slider-btns">
                <Link href="/poslovi" className="theme-btn style-four">
                  Pogledaj Oglase <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`slider-item ${active == 3 ? "slick-active" : ""}`}
          style={{ backgroundImage: "url(assets/images/slider/slide3.jpg)" }}
        >
          <div className="container">
            <div className="slider-content">
              <span className="sub-title-two">
                Dobrodosli u Omladinsku Zadrugu Gradac
              </span>
              <h2>Trazis Posao? Na Pravom Si Mestu</h2>
              <div className="slider-btns">
                <Link href="/poslovi" className="theme-btn style-four">
                  Pogledaj Oglase <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagingInfo">
        <span className="pagingStatus">03</span>
        <span className="separator">/</span>
        <span className="pagingCount">0{active}</span>
      </div>
      <div className="circle-two">
        <Image
          src={circleOne}
          alt="Circle"
          priority
        />
      </div>
      <div className="circle-one">
        <Image
          src={circleThree}
          alt="Circle"
          priority
        />
      </div>
    </section>
  );
};
export default Index3Slider;