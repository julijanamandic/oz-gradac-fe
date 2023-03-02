import Image from "next/legacy/image";
import gallery1 from '../../../public/assets/images/widgets/gallery1.jpg';
import gallery2 from '../../../public/assets/images/widgets/gallery2.jpg';
import gallery3 from '../../../public/assets/images/widgets/gallery3.jpg';
import gallery4 from '../../../public/assets/images/widgets/gallery4.jpg';
import gallery5 from '../../../public/assets/images/widgets/gallery5.jpg';
import gallery6 from '../../../public/assets/images/widgets/gallery6.jpg';

const Gallery = () => {

    return (
        <div className="col-lg-3">

            <div className="footer-widget gallery-widget">

                <h5 className="footer-title">Galerija</h5>

                <div className="gallery-widget-wrap">

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery1}
                            alt="Gallery"
                            priority
                        />

                    </div>

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery2}
                            alt="Gallery"
                            priority
                        />

                    </div>

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery3}
                            alt="Gallery"
                            priority
                        />

                    </div>

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery4}
                            alt="Gallery"
                            priority
                        />

                    </div>

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery5}
                            alt="Gallery"
                            priority
                        />

                    </div>

                    <div className="gallery-widget-item">

                        <Image
                            src={gallery6}
                            alt="Gallery"
                            priority
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Gallery;