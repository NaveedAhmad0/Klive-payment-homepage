import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faQrcode,
	faUsd,
	faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import channel from "../../assets/channel.svg";

const channels = () => {
	return (
		<div>
			{/* <!-- Start header Area --> */}
			<section
				id="channeloffered"
				className="header-area channeloffered1 header-eight">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 col-12">
							<div>
								<h2 className="header-content ">Channels Offered</h2>
								<p>
									The fastest, easiest and most secure payment method today is
									QR Code payment. KlivePay will allow usage of QR Code payments
									and more will be added eventually.
								</p>
							</div>
							<br></br>
							<div className="cardservices">
								<div className="card-body header-content d-flex">
									<div style={{ padding: "1rem" }}>
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
										<h5 className="text-black">QR Code</h5>
										<p className="text-black" style={{ margin: "0px" }}>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Tellus facilisi orci scelerisque cursus placerat
											adipiscing cursus.
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="cardservices">
								<div className="card-body header-content d-flex">
									<div style={{ padding: "1rem" }}>
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
										<h5 className="text-black">Payment Methods Accepted</h5>
										<p className="text-black" style={{ margin: "0px" }}>
											KlivePay strives to continuously improve and value add to
											users’ and businesses’ and their lives. We only provide
											you tried, proven and payment method and adding as we grow
											along.
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="cardservices">
								<div className="card-body header-content d-flex">
									<div style={{ padding: "1rem" }}>
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
										<h5 className="text-black">Other payment options</h5>
										<p className="text-black" style={{ margin: "0px" }}>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Tellus facilisi orci scelerisque cursus placerat
											adipiscing cursus.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 col-12">
							<div className="header-image channel-header-image header-imagecontent">
								<img src={channel} alt="channel" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End header Area --> */}
		</div>
	);
};

export default channels;
