import React from "react";
import "../css/Testimonal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headerimg from "../Images/Headerimg.jpg";
const Testimonal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="main-testimonal">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Our Client Testimonal
        </h1>
        <p data-aos="fade-down" data-aos-duration="1000">
          Explore how candidates, armed with resumes from us, turned their
          career dreams into reality.
        </p>
        <div className="carosel">
          <Slider {...settings}>
            <div>
              <div className="caro-box-1">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-2">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-3">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-4">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-5">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-6">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-7">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-8">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
            <div>
              <div className="caro-box-9">
                <img src={Headerimg} width={100} alt="" />
                <p>
                  “ My experience with Mahesh of CXO Branding has exceeded my
                  very
                  <br></br>high expectations.
                  <br></br>my past and current career experiences into a
                  wonderful summary & biography.
                </p>
                <h5>Dulce Torff</h5>
                <p></p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="bottom-p">
          <p>
            Explore more customer testimonials view all the testimonials here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
