import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Purus, proin lacus, viverra lobortis ipsum vivamus. Eu netus
									tortor, netus hac nulla ipsum mauris viverra.
								</p>
							</div>
							<br></br>
							<div className="card">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "2rem", padding: "1rem" }}>
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
										<h5 className="text-black">Payment Solutions</h5>
										<p className="text-black">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sit non in quis pellentesque sed pellentesque cras
											adipiscing turpis
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="card">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "2rem", padding: "1rem" }}>
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
										<h5 className="text-black">Money Management</h5>
										<p className="text-black">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
											ut felis felis quis mi ut sollicitudin sed pellentesque
										</p>
									</div>
								</div>
							</div>
							<br></br>
							<div className="card">
								<div class="card-body d-flex ">
									<div style={{ marginTop: "2rem", padding: "1rem" }}>
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
										<h5 className="text-black">Online Business Strategy</h5>
										<p className="text-black">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
											ut felis felis quis mi ut sollicitudin sed pellentesque
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
