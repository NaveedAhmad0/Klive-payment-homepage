import React from "react";

import icon1 from "../../assets/Icon Wallet.png";
import icon2 from "../../assets/Icon Money.png";
import icon3 from "../../assets/Icon Transfer.png";
import services from "../../assets/services.svg";
import "../../App.css";
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
								<div class="card-body ourservicesCard d-flex ">
									<div style={{ marginTop: "2rem", padding: "0.5rem" }}>
										{" "}
										<img src={icon2} alt="icon" width={120} height={50} />
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
								<div class="card-body ourservicesCard d-flex ">
									<div style={{ marginTop: "2rem", padding: "1rem" }}>
										{" "}
										<img src={icon3} alt="icon" width={100} height={50} />
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
								<div class="card-body ourservicesCard d-flex ">
									<div style={{ marginTop: "1rem", padding: "1rem" }}>
										{" "}
										<img src={icon1} alt="icon" width={100} height={50} />
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
