import React from "react";
import banner from "../../assets/Frame.png";
import "../../App.css";
const header = () => {
	return (
		<div>
			{/* <!-- Start header Area --> */}
			<section id="home" class="header-area header-eight py-5">
				<div class="container ">
					<div class="row align-items-center mb-5">
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-content ">
								<h1 className="text-black">
									Easy and Safe way to Transfer your money
								</h1>
								<p className="text-black fs-5">
									It is a payment services gateway. Users come in, to use as a
									way to pay other merchants.
								</p>
								<p className="text-black fs-5">
									you want to buy something, our platform acts as a gateway, a
									bridge, between you and the merchant so that you payment is
									done safely, securely and on time.
								</p>
								<div class="button">
									<a
										href="#getStarted"
										class="button-17"
										style={{ textDecoration: "none" }}>
										Get Started
									</a>
									<a
										href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
										class="glightbox video-button">
										{/* <span class="btn icon-btn rounded-full">
                  <i class="lni lni-play"></i>
                </span> */}
										<a
											href="#learn"
											// class="text-black "
											style={{
												marginLeft: "16px",
												color: "#2D96D3",
												textDecoration: "none",
											}}>
											Learn More---{">"}
										</a>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-image">
								<img src={banner} alt="banner" />
							</div>
						</div>
					</div>
					{/* <br></br> */}
					<div className="container-fluid py-5 d-flex justify-content-around mt-5">
						<div id="header-point" className="d-flex justify-content-between">
							<h4 className="fw-bold ">2300+ </h4>
							<span className="ms-3">user Active</span>
						</div>
						<div id="header-point" className="d-flex justify-content-around">
							{" "}
							<h4 className="fw-bold ">150+ </h4>
							<span className="ms-3">Trusted By Company</span>
						</div>
						<div id="header-point" className="d-flex justify-content-around">
							<h4 className="fw-bold ">$280M+ </h4>
							<span className="ms-3">Transaction</span>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End header Area --> */}
		</div>
	);
};

export default header;
