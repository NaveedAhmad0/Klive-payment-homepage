import React from "react";
import "./services.css";
import Ellipse from "../../img/Ellipse 13.png";
import Ellipse1 from "../../img/Ellipse 12.png";
import Ellipse2 from "../../img/Ellipse 11.png";

const service = () => {
	return (
		<div>
			{/* <!-- ===== service-area start ===== --> */}
			<section id="testimonials" class="services-area services-eight">
				{/* <!--======  Start Section Title Five ======--> */}
				<div class="section-title-five">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="content">
									{/* <h6>Services</h6> */}
									<h2 class="fw-bold">What Our Happy Customer Say </h2>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Purus, proin lacus, viverra lobortis ipsum vivamus 〃
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
						<div class="col-lg-4 col-md-6">
							<div class="single-services">
								<div class="service-content">
									<h1
										style={{
											color: "#2D96D3",
											fontSize: "3.5rem",
											fontWeight: "900",
										}}>
										〃
									</h1>
									<p>
										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
										eirmod tempor ividunt labor dolore magna.
									</p>
								</div>

								<div class="service-icon">
									{/* <i class="lni lni-capsule"></i> */}
									<img src={Ellipse} alt="testimonial" height={"75px"} />
									<h6>Albert Flores</h6>
									<div className="Paragrap">
										<p>Head Of Finance</p>
									</div>
								</div>
								<div></div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-services">
								<div class="service-content">
									<h1
										style={{
											color: "#2D96D3",
											fontSize: "3.5rem",
											fontWeight: "900",
										}}>
										〃
									</h1>
									<p>
										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
										eirmod tempor ividunt labor dolore magna.
									</p>
								</div>

								<div class="service-icon">
									{/* <i class="lni lni-capsule"></i> */}
									<img src={Ellipse1} alt="testimonial" height={"75px"} />
									<h6>Robert Fox</h6>
									<div className="Paragrap">
										<p>Head Of Finance</p>
									</div>
								</div>
								<div></div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-services">
								<div class="service-content">
									<h1
										style={{
											color: "#2D96D3",
											fontSize: "3.5rem",
											fontWeight: "900",
										}}>
										〃
									</h1>
									<p>
										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
										eirmod tempor ividunt labor dolore magna.
									</p>
								</div>

								<div class="service-icon">
									{/* <i class="lni lni-capsule"></i> */}
									<img src={Ellipse2} alt="testimonial" height={"75px"} />
									<h6>Theresa Webb</h6>
									<div className="Paragrap">
										<p>Head Of Finance</p>
									</div>
								</div>
								<div></div>
							</div>
						</div>
						{/* <div class="col-lg-4 col-md-6">
          <div class="single-services">
            <div class="service-icon">
              <i class="lni lni-dashboard"></i>
            </div>
            <div class="service-content">
              <h4>Speed Optimized</h4>
              <p>
                Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
                eirmod tempor ividunt labor dolore magna.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-services">
            <div class="service-icon">
              <i class="lni lni-layers"></i>
            </div>
            <div class="service-content">
              <h4>Fully Customizable</h4>
              <p>
                Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
                eirmod tempor ividunt labor dolore magna.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-services">
            <div class="service-icon">
              <i class="lni lni-reload"></i>
            </div>
            <div class="service-content">
              <h4>Regular Updates</h4>
              <p>
                Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
                eirmod tempor ividunt labor dolore magna.
              </p>
            </div>
          </div>
        </div> */}
					</div>
				</div>
			</section>
			{/* <!-- ===== service-area end ===== --> */}
		</div>
	);
};

export default service;
