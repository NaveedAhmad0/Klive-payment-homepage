import React from "react";
import banner from '../../assets/banner.svg'

const header = () => {
  return (
    <div>
      {/* <!-- Start header Area --> */}
      <section id="home" class="header-area header-eight">
        <div class="container" >
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="header-content ">
                <h2 className="text-black">KlivePay Is Your Solution To Payments</h2>
                <p className="text-black">
                  KlivePayis the Premier payment allowing global users make
                  payments seamlessly. Regardless of your channel or Type of
                  industry,Klivepay is fast,easy to use and most importantly
                  secure.
                </p>
                <div class="button">
                  <a href="javascript:void(0)" class="button-17" style={{textDecoration:"none"}}>
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                    class="glightbox video-button"
                  >
                    {/* <span class="btn icon-btn rounded-full">
                  <i class="lni lni-play"></i>
                </span> */}
                    <span class="text-black " style={{marginLeft: "16px"}}>Learn More---{">"}</span>
                  </a>
                </div>
                
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
          <div class="header-image header-imagecontent">
            <img src={banner} alt="banner" />
          </div>
        </div>
          </div>
          {/* <br></br> */}
          <div className="d-flex justify-content-around">
                  <div id="header-point" className="d-flex justify-content-around"><h4>2300+ </h4><span>user Active</span></div>
                 <div id="header-point" className="d-flex justify-content-around"> <h4>150+ </h4><span>Trusted By Company</span></div>
                  <div id="header-point" className="d-flex justify-content-around"><h4>$280M+ </h4><span>Transaction</span></div>
                </div>
        </div>
      </section>
      {/* <!-- End header Area --> */}
    </div>
  );
};

export default header;
