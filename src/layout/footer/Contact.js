
const Contact = () => {

    return (

        <div className="col-md-3 col-sm-4">

            <div className="footer-widget contact-info-widget">

                <h5 className="footer-title">Kontakt</h5>

                <ul>

                    <li>

                        <i className="fas fa-map-marker-alt" /> Bulevar Zorana Djindjica 179,

                        Novi Beograd (Studentski grad)

                    </li>

                    <li>

                        <i className="far fa-envelope" />{" "}

                        <a href="mailto:support@gmail.com">ozgradac@gmail.com</a>

                    </li>

                    <li>

                        <i className="fas fa-phone" />{" "}

                        <a href="callto:+3810112673244">+381 (011) 26 73 244</a>

                    </li>

                    <li>

                        <i className="far fa-clock" /> Ponedeljak - Petak,

                        <br /> 08 - 16h

                    </li>

                </ul>

            </div>

        </div>
    )
}
export default Contact;