import React from "react";
import LOGO from "../../img/LOGO.png";

const footer = () => {
	return (
		<div>
			{/* <!-- Start Footer Area --> */}
			<footer class="footer-area footer-eleven">
				{/* <!-- Start Footer Top --> */}
				<div class="footer-top">
					<div class="container">
						<div class="inner-content">
							<div class="row">
								<div class="col-lg-4 col-md-6 col-12">
									{/* <!-- Single Widget --> */}
									<div class="footer-widget f-about">
										<div class="logo">
											<a href="index.html">
												{/* <img src="assets/images/logo.svg" alt="#" class="img-fluid" /> */}
												<img src={LOGO} alt="testimonial" />
											</a>
										</div>

										<p class="copyright-text">
											<span>
												Lorem Ipsum is simply dummy text of the printing and
												typesetting{" "}
											</span>
											<p>copyright 2022 </p>
										</p>
									</div>
									{/* <!-- End Single Widget --> */}
								</div>
								<div class="col-lg-2 col-md-6 col-12">
									{/* <!-- Single Widget --> */}
									<div class="footer-widget f-link">
										<h5>Solutions</h5>
										<ul>
											<li>
												<a href="javascript:void(0)">Marketing</a>
											</li>
											<li>
												<a href="javascript:void(0)">Analytics</a>
											</li>
											<li>
												<a href="javascript:void(0)">Commerce</a>
											</li>
											<li>
												<a href="javascript:void(0)">Insights</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-lg-2 col-md-6 col-12">
									{/* <!-- Single Widget --> */}
									<div class="footer-widget f-link">
										<h5>Support</h5>
										<ul>
											<li>
												<a href="javascript:void(0)">Pricing</a>
											</li>
											<li>
												<a href="javascript:void(0)">Documentation</a>
											</li>
											<li>
												<a href="javascript:void(0)">Guides</a>
											</li>
											<li>
												<a href="javascript:void(0)">API Status</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-12">
									<div class="footer-widget newsletter">
										<h5>Subscribe</h5>
										<p>Subscribe to our newsletter for the latest updates</p>
										<form
											action="#"
											method="get"
											target="_blank"
											class="newsletter-form">
											<input
												name="EMAIL"
												placeholder="Email address"
												required="required"
												type="email"
											/>
											<div class="button">
												<button class="sub-btn">
													<i class="lni lni-envelope"></i>
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default footer;
