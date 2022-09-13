import React from "react";
import LOGO from "../../assets/K Live Pay.png";
import fb from "../../assets/Group 90.png";
import twt from "../../assets/Group 91.png";
import ggle from "../../assets/Group 92.png";
import contctIcon from "../../assets/Group 75.png";
import contctIcon1 from "../../assets/Group 78.png";
import contctIcon2 from "../../assets/Group 77.png";

const footer = () => {
	return (
		<div>
			{/* <!-- Start Footer Area --> */}
			<footer class="footer-area footer-eleven">
				{/* <!-- Start Footer Top --> */}
				<div class="footer-top">
					<div class="container">
						<div class="inner-content">
							<div class="row jusitfy-content-between">
								<div class="col-lg-3 col-md-6 col-12">
									{/* <!-- Single Widget --> */}
									<div class="footer-widget f-about">
										<div class="logo">
											<a href="index.html">
												{/* <img src="assets/images/logo.svg" alt="#" class="img-fluid" /> */}
												<img
													src={LOGO}
													alt="testimonial"
													width={180}
													height={80}
												/>
											</a>
										</div>

										<p class="copyright-text">
											<span>
												KlivePay is the premier payment gateway allowing global
												users make payments seamlessly.
											</span>
											<p>copyright 2022 </p>
										</p>
									</div>
									{/* <!-- End Single Widget --> */}
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									{/* <!-- Single Widget --> */}
									<div class="footer-widget pb-5 f-link">
										<div className="col-lg-5 mx-auto d-flex justify-content-around">
											<img src={fb} alt="fb" />
											<img src={twt} alt="twt" />
											<img src={ggle} alt="insta" />
										</div>
									</div>

									<div class="footer-widget belowLine f-link">
										<div className="d-flex justify-content-between">
											<p>
												<a href="home">Introduction</a>
											</p>
											<p>
												<a href="home">What we do</a>
											</p>
											<p>
												<a href="home">About</a>
											</p>
											<p>
												<a href="home">Service</a>
											</p>
											<p>
												<a href="home">Pricing</a>
											</p>
										</div>
									</div>
								</div>

								{/* <div class="col-lg-4 col-md-6 col-12"> */}
								{/* <div class="footer-widget newsletter"> */}
								{/* <h3>Contact Info :</h3> */}
								{/* <div className="d-flex mt-4 mb-3">
											<img src={contctIcon} alt="some" />
											<a className="ms-1" href="some">
												(704) 555-0127
											</a>
										</div>
										<div className="d-flex mb-3">
											<img src={contctIcon1} alt="some" />
											<a className="ms-1" href="some">
												abc123@example.com
											</a>
										</div>
										<div className="d-flex mb-3">
											<img src={contctIcon2} alt="some" />
											<a className="ms-1" href="some">
												http://www.1-2-pay.com
											</a>
										</div> */}
								{/* </div> */}
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default footer;
