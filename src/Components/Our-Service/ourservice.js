import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faQrcode,
	faUsd,
	faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import services from "../../assets/services.svg";

const ourservice = () => {
	return (
		<div>
			{/* <!-- Start header Area --> */}
			<section id="ourservices" class="header-area header-eight">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-image service-header-image">
								<img src={services} alt="services" className="services" />
							</div>
						</div>
						<div class="col-lg-6 col-md-12 col-12">
							<div>
								<h1 class="header-content ">What our services are</h1>
								<p>
									Never have to worry about seamless transactions ever again.
									With robust security coupled with easily accessible and usable
									payment methods, KlivePay enables both users and businesses
									the flexibility to enhance payment processes! With short
									turnaround times and exceptionally well thought out systems in
									place, you will never need to worry.
								</p>
							</div>
							<br></br>
							<div className=" cardservices">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "1rem", padding: "1rem" }}>
										{" "}
										<FontAwesomeIcon
											icon={faQrcode}
											style={{
												backgroundColor: "dodgerblue",
												color: "white",
												padding: "0.7rem",
												borderRadius: "5px",
											}}
										/>
									</div>
									<div>
										<h5 className="text-black">Easy to use QR Codes</h5>
										<p className="text-black">
											Quick, easy and secure. Payments will never be the same
											again. KlivePay’s seamless platform allows for payments to
											be received within 1 business day.
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="cardservices">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "2rem", padding: "1rem" }}>
										{" "}
										<FontAwesomeIcon
											icon={faUsd}
											style={{
												backgroundColor: "dodgerblue",
												color: "white",
												padding: "0.7rem",
												borderRadius: "5px",
											}}
										/>
									</div>
									<div>
										<h5 className="text-black">Mobile and Desktop </h5>
										<p className="text-black">
											No matter where you may be, KlivePay will always be at
											your fingertips.
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="cardservices">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "1rem", padding: "1rem" }}>
										{" "}
										<FontAwesomeIcon
											icon={faArrowRightArrowLeft}
											style={{
												backgroundColor: "dodgerblue",
												color: "white",
												padding: "0.7rem",
												borderRadius: "5px",
											}}
										/>
									</div>
									<div>
										<h5 className="text-black">Fraud detection</h5>
										<p className="text-black">
											KlivePay’s platform is geared towards ensuring security
											and protection for all our users.
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
