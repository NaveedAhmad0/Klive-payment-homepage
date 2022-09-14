import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faGaugeHigh,
	faGaugeMed,
	faGaugeSimpleHigh,
	faQrcode,
	faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import Bgimg from "../../assets/Group 1000006452.png";
const price = () => {
	return (
		<div >
			{/* <!-- Start Pricing  Area --> */}
			<section  class="pricing-area pricing-fourteen">
				{/* <!--======  Start Section Title Five ======--> */}
				<div id="whatwedo" class="section-title-five">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="content">
									{/* <h6>Pricing</h6> */}
									<h1  class="fw-bold">What we Do</h1>
									<p>
									KlivePay accepts multiple payment methods and enables you to boost your online presence and customer acquisition by seamlessly and securely accepting payments via select major payment methods.
									<br></br>
									<br></br>
									Acting as a unified platform for all payments across multiple platforms, KlivePay boosts your business and experience by being a one-stop dashboard for managing, accepting and making payments.
									</p>
								</div>
							</div>
						</div>
						{/* <!-- row --> */}
					</div>
					{/* <!-- container --> */}
				</div>
				{/* <!--======  End Section Title Five ======--> */}
				<div className="container bgimg">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen">
								<FontAwesomeIcon
									icon={faGaugeHigh}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
										marginBottom: "0.7rem",
									}}
								/>
								<div class="table-head">
									<h3>Fast!</h3>
									<p style={{ fontSize: "16px" }}>
									KlivePay focuses on widely accepted and used payment methods, and our priority is fast and hassle-free settlements.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen text-left middle">
								<FontAwesomeIcon
									icon={faTimeline}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
										marginBottom: "0.7rem",
									}}
								/>
								<div class="table-head">
									<h3>Efficient flow!</h3>
									<p style={{ fontSize: "16px" }}>
									KlivePay is optimized to enable quick transactions by utilizing QR Codes and a backend that is secure and built for mass adoption.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen">
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
										// marginBottom: "0.7rem",
									}}
								/>
								<div class="table-head text-left">
									<h3>Responsive!</h3>
									<p style={{ fontSize: "16px" }}>
									We strive on always keeping our users’ pleasant experience on the top of our to-do list. Our dedicated Customer Service Team is trained to always provide on-time and effective solutions to any issues any user might face!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default price;
