import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
const price = () => {
	return (
		<div>
			{/* <!-- Start Pricing  Area --> */}
			<section id="whatwedo" class="pricing-area pricing-fourteen">
				{/* <!--======  Start Section Title Five ======--> */}
				<div class="section-title-five">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="content">
									{/* <h6>Pricing</h6> */}
									<h1 class="fw-bold">What we Do</h1>
									<p>
										We are between you and your merchant. We help you to manage
										payments.
									</p>
								</div>
							</div>
						</div>
						{/* <!-- row --> */}
					</div>
					{/* <!-- container --> */}
				</div>
				{/* <!--======  End Section Title Five ======--> */}
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen">
								<FontAwesomeIcon
									icon={faQrcode}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
									}}
								/>
								<div class="table-head">
									<h3>Fast!</h3>
									<p>
										Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
										Enim conse ctetur urna vitae magnis ipsum dolor sit sit
										amet.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen text-left middle">
								<FontAwesomeIcon
									icon={faQrcode}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
									}}
								/>
								<div class="table-head">
									<h3>Efficient flow!</h3>
									<p>
										Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
										Enim conse ctetur urna vitae magnis ipsum dolor sit sit
										amet.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-12">
							<div class="pricing-style-fourteen">
								<FontAwesomeIcon
									icon={faQrcode}
									style={{
										backgroundColor: "dodgerblue",
										color: "white",
										padding: "0.7rem",
										borderRadius: "5px",
									}}
								/>
								<div class="table-head text-left">
									<h3>Responsive!</h3>
									<p>
										Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
										Enim conse ctetur urna vitae magnis ipsum dolor sit sit
										amet.
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
