import React from "react";
import banner from "../../assets/Frame.png";
import "../../App.css";
const header = () => {
	return (
		<div>
			{/* <!-- Start header Area --> */}
			<section
				id="introduction"
				class="header-area HomeHeader header-eight py-5">
				<div class="container ">
					<div class="row align-items-center mb-5">
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-content ">
								<h1 className="text-black">
									Welcome to KlivePay.<br></br> The Easiest and Safest Payment Gateway For You
								</h1>
								<p className="text-black fs-5">
									KlivePay is the premier payment gateway allowing global users to
									make payments seamlessly.
								</p>
								<p className="text-black fs-5">
									Regardless of your channel or type of industry, Klivepay is
									fast, easy to use and most importantly secure.
								</p>
								<div class="button">
									<a
										href="#getStarted"
										class="button-17"
										style={{ textDecoration: "none" }}>
										Get Started
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-image firstHeader">
								<img src={banner} alt="banner" />
							</div>
						</div>
					</div>
					{/* <br></br> */}
					<div className="container-fluid py-5 numberOfUsers  mt-5">
						<div
							id="header-point"
							className="d-flex numberOfUsers1st justify-content-between">
							<h2 className="fw-bold ">2300+ </h2>
							<span className="ms-4 mt-2">Active Users</span>
						</div>
						<div
							id="header-point"
							className="d-flex numberOfUsers1st justify-content-around">
							{" "}
							<h2 className="fw-bold ">20+ </h2>
							<span className="ms-4 mt-2"> Merchants</span>
						</div>
						<div
							id="header-point"
							className="d-flex numberOfUsers1st justify-content-around">
							<h2 className="fw-bold ">$280M+ </h2>
							<span className="ms-4 mt-2"> Transacted</span>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End header Area --> */}
		</div>
	);
};

export default header;
