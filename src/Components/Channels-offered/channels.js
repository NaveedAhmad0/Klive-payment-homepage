import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faUsd,faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import channel from "../../assets/channel.svg";

const channels = () => {
	return (
		<div>
			{/* <!-- Start header Area --> */}
			<section
				id="channeloffered"
				class="header-area channeloffered1 header-eight">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12 col-12">
							<div>
								<h2 class="header-content ">Channels Offered</h2>
								<p>
									The fastest, easiest and most secure payment method today is
									QR Code payment. KlivePay will allow usage of QR Code payments
									and more will be added eventually.
								</p>
							</div>
							<br></br>
							<div className="cardservices">
								<div class="card-body header-content d-flex">
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
								<div class="card-body header-content d-flex">
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
										<h5 className="text-black">iBanking/mbanking</h5>
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
								<div class="card-body header-content d-flex">
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
						<div class="col-lg-6 col-md-12 col-12">
							<div class="header-image channel-header-image header-imagecontent">
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
