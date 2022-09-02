import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import services from '../../assets/services.svg'

const ourservice = () => {
  return (
    <div>
      {/* <!-- Start header Area --> */}
      <section id="hero-area" class="header-area header-eight">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="header-image service-header-image">
                <img src={services} alt="services" className="services" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <div>
                <h2 class="header-content ">Our Services</h2>
                <p>
                  Acting as a unified platform for all payments
                  across multiple platforms, KlivePay will boost your business
                  and experience by being a one-stop dashboard for managing,
                  accepting and making payments.
                </p>
              </div>
              <br></br>
              <div className="card">
                <div class="card-body d-flex ">
                    <div style={{marginTop:"2rem",padding:"1rem"}}> <FontAwesomeIcon
                  icon={faQrcode}
                  style={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                    padding: "0.7rem",
                    borderRadius: "5px",

                  }}
                /></div>
                    <div>
                  <h5 className="text-black">
                    KlivePay Is Your Solution To Payments
                  </h5>
                  <p className="text-black">
                    KlivePayis the Premier payment allowing global users make
                    payments seamlessly. Regardless of your channel or Type of
                    industry,Klivepay is fast,easy to use and most importantly
                    secure.
                  </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card">
              <div class="card-body d-flex ">
                    <div style={{marginTop:"2rem",padding:"1rem"}}> <FontAwesomeIcon
                  icon={faQrcode}
                  style={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                    padding: "0.7rem",
                    borderRadius: "5px",

                  }}
                /></div>
                    <div>
                  <h5 className="text-black">
                    KlivePay Is Your Solution To Payments
                  </h5>
                  <p className="text-black">
                    KlivePayis the Premier payment allowing global users make
                    payments seamlessly. Regardless of your channel or Type of
                    industry,Klivepay is fast,easy to use and most importantly
                    secure.
                  </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card">
              <div class="card-body d-flex ">
                    <div style={{marginTop:"2rem",padding:"1rem"}}> <FontAwesomeIcon
                  icon={faQrcode}
                  style={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                    padding: "0.7rem",
                    borderRadius: "5px",

                  }}
                /></div>
                    <div>
                  <h5 className="text-black">
                    KlivePay Is Your Solution To Payments
                  </h5>
                  <p className="text-black">
                    KlivePayis the Premier payment allowing global users make
                    payments seamlessly. Regardless of your channel or Type of
                    industry,Klivepay is fast,easy to use and most importantly
                    secure.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End header Area --> */}
    </div>
  );
};

export default ourservice;
