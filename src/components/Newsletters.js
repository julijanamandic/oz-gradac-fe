import { useState, useEffect } from "react";
import { validateEmail } from "../util/helpers";
import { toast } from 'react-toastify';
import Image from "next/legacy/image";
import footerVideoBg from '../../public/assets/images/video/footer-video-bg.jpg';

const Newsletters = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onSubmit = (e) => {

    e.preventDefault();

    if (email == '') {
      setEmailError('Ovo polje je obavezno!');
    } else {
      const data = {
        email: email
      }
      console.log(data);
      subscribe(data);
    }
  }

  const subscribe = async (data) => {

    const res = await fetch('http://localhost:8080/api/newsletter/subscribe',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    if (!res.ok) {
      toast.error("Ops! Doslo je do neke greske!")
    } else {
      const data = await res.json();
      setEmail('');
      toast.success("Uspesno ste se prijavili za newsletter!");
    }
  }

  useEffect(() => {
    if (!email) {
      setEmailError("");
    } else {
      if (validateEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Unesite validnu email adresu.");
      }
    }
  },
    [email]
  );

  return (

    <div className="footer-newsletter br-10 bg-lighter">

      <div className="row">

        <div className="col-lg-6">

          <div

            className="newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s"

          >
            <Image
              src={footerVideoBg}
              alt="Newsletter"
              layout="fill"
              objectFit="cover"
              priority
            />

          </div>

        </div>

        <div className="col-lg-6 align-self-center">

          <div className="newsletter-content wow fadeInRight delay-0-2s">

            <div className="section-title mb-20">

              <span className="sub-title-two">Newsletters</span>

              <h2>Dobijaj nase notifikacije</h2>

            </div>

            <form

              onSubmit={onSubmit}

              className="newsletter-form mt-25"

              action="#"

            >

              <div className="newsletter-radios mb-25">

                <div className="custom-control custom-radio">

                  <input

                    type="radio"

                    className="custom-control-input"

                    id="hero-wekly"

                    name="example1"

                    defaultChecked

                  />

                  <label className="custom-control-label" htmlFor="hero-wekly">

                    Regularno

                  </label>

                </div>

                <div className="custom-control custom-radio">

                  <input

                    type="radio"

                    className="custom-control-input"

                    id="hero-monthly"

                    name="example1"

                  />

                  <label

                    className="custom-control-label"

                    htmlFor="hero-monthly"

                  >

                    Nedeljno

                  </label>

                </div>

              </div>

              <div className='newsletter-email'>

                <label htmlFor="email">

                  <i className="far fa-envelope" />

                </label>

                <input

                  id="email"

                  type="email"

                  placeholder="Unesi Email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  className={`${emailError ? 'input-error' : ''}`}

                />

                <button type="submit" className="theme-btn style-two">

                  Prijavi se <i className="fas fa-arrow-right" />

                </button>

              </div>
              {emailError && (
                <p className="text-error"><span>{emailError}</span></p>
              )}

            </form>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Newsletters;