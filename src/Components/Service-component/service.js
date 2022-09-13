import React from "react";
import "./services.css";
import Ellipse from "../../img/Ellipse 13.png";
import Ellipse1 from "../../img/Ellipse 12.png";
import Ellipse2 from "../../img/Ellipse 11.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

// import Carousel from "react-bootstrap/Carousel";
// import Item from "react-elastic-carousel";
// const service = () => {
// 	return (
// 		<div>
// 			{/* <!-- ===== service-area start ===== --> */}
// 			<section id="testimonials" class="services-area services-eight">
// 				{/* <!--======  Start Section Title Five ======--> */}
// 				<div class="section-title-five">
// 					<div class="container">
// 						<div class="row">
// 							<div class="col-12">
// 								<div class="content">
// 									{/* <h6>Services</h6> */}
// 									<h2 class="fw-bold">What Our Happy Customer Say </h2>

// 									<p>
// 										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// 										Purus, proin lacus, viverra lobortis ipsum vivamus 〃
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 						{/* <!-- row --> */}
// 					</div>
// 					{/* <!-- container --> */}
// 				</div>
// 				{/* <!--======  End Section Title Five ======--> */}
// 				<div class="container">
// 					<div class="row">
// 						<div class="col-lg-12 col-md-6">
// 							<div class="single-services">
// 								<div class="service-content">
// 									<h1
// 										style={{
// 											color: "#2D96D3",
// 											fontSize: "3.5rem",
// 											fontWeight: "900",
// 										}}>
// 										〃
// 									</h1>
// 									<p>
// 										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
// 										eirmod tempor ividunt labor dolore magna.
// 									</p>
// 								</div>

// 								<div class="service-icon">
// 									{/* <i class="lni lni-capsule"></i> */}
// 									<img src={Ellipse} alt="testimonial" height={"75px"} />
// 									<h6>Albert Flores</h6>
// 									<div className="Paragrap">
// 										<p>Head Of Finance</p>
// 									</div>
// 								</div>
// 								<div></div>
// 							</div>
// 						</div>
// 						<div class="col-lg-4 col-md-6">
// 							<div class="single-services">
// 								<div class="service-content">
// 									<h1
// 										style={{
// 											color: "#2D96D3",
// 											fontSize: "3.5rem",
// 											fontWeight: "900",
// 										}}>
// 										〃
// 									</h1>
// 									<p>
// 										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
// 										eirmod tempor ividunt labor dolore magna.
// 									</p>
// 								</div>

// 								<div class="service-icon">
// 									{/* <i class="lni lni-capsule"></i> */}
// 									<img src={Ellipse1} alt="testimonial" height={"75px"} />
// 									<h6>Robert Fox</h6>
// 									<div className="Paragrap">
// 										<p>Head Of Finance</p>
// 									</div>
// 								</div>
// 								<div></div>
// 							</div>
// 						</div>
// 						<div class="col-lg-4 col-md-6">
// 							<div class="single-services">
// 								<div class="service-content">
// 									<h1
// 										style={{
// 											color: "#2D96D3",
// 											fontSize: "3.5rem",
// 											fontWeight: "900",
// 										}}>
// 										〃
// 									</h1>
// 									<p>
// 										Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy
// 										eirmod tempor ividunt labor dolore magna.
// 									</p>
// 								</div>

// 								<div class="service-icon">
// 									{/* <i class="lni lni-capsule"></i> */}
// 									<img src={Ellipse2} alt="testimonial" height={"75px"} />
// 									<h6>Theresa Webb</h6>
// 									<div className="Paragrap">
// 										<p>Head Of Finance</p>
// 									</div>
// 								</div>
// 								<div></div>
// 							</div>
// 						</div>

// 					</div>
// 				</div>
// 			</section>
// 			{/* <!-- ===== service-area end ===== --> */}
// 		</div>
// 	);
// };

// export default service;
function service() {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<>
			<section
				id="testimonials"
				class="services-area serviceSection services-eight">
				{/* <!--======  Start Section Title Five ======--> */}
				<div class="section-title-five">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="content">
									{/* <h6>Services</h6> */}
									<h2 class="fw-bold">What Our Happy Customers Say</h2>
									<p>
										Are you ready to be a part of KlivePay yet? See what others
										have to say!
									</p>
								</div>
							</div>
						</div>
						{/* <!-- row --> */}
					</div>
					{/* <!-- container --> */}
				</div>
			</section>
			<Carousel breakPoints={breakPoints} pagination={false} itemsToShow={3}>
				<Item>
					<section id="testimonials" class="services-area services-eight">
						{/* <!--======  Start Section Title Five ======--> */}
						<div class="section-title-five">{/* <!-- container --> */}</div>
						{/* <!--======  End Section Title Five ======--> */}
						<div class="container">
							<div class="row">
								<div class="mx-auto col-lg-12 col-md-6">
									<div class="single-services">
										<div class="service-content">
											<p>
												I have never used something so easy and
												efficient.KlivePay has become my number one choice for
												receiving payments and that is such an easy decision to
												make!
											</p>
										</div>

										<div class="service-icon">
											{/* <i class="lni lni-capsule"></i> */}
											<img src={Ellipse2} alt="testimonial" height={"75px"} />
											<div className="Paragrap">
												<h6>Theresa Webb</h6>
												<p>Head Of Finance</p>
											</div>
										</div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Item>
				<Item>
					<section id="testimonials" class="services-area services-eight">
						{/* <!--======  Start Section Title Five ======--> */}
						<div class="section-title-five">{/* <!-- container --> */}</div>
						{/* <!--======  End Section Title Five ======--> */}
						<div class="container">
							<div class="row">
								<div class="mx-auto col-lg-12 col-md-6">
									<div class="single-services">
										<div class="service-content">
											<p>
												I have never used something so easy and
												efficient.KlivePay has become my number one choice for
												receiving payments and that is such an easy decision to
												make!
											</p>
										</div>

										<div class="service-icon">
											{/* <i class="lni lni-capsule"></i> */}
											<img src={Ellipse} alt="testimonial" height={"75px"} />
											<div className="Paragrap">
												<h6>Albert Flores</h6>
												<p>Head Of Finance</p>
											</div>
										</div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Item>
				<Item>
					<section id="testimonials" class="services-area services-eight">
						{/* <!--======  Start Section Title Five ======--> */}
						<div class="section-title-five">{/* <!-- container --> */}</div>
						{/* <!--======  End Section Title Five ======--> */}
						<div class="container">
							<div class="row">
								<div class="mx-auto col-lg-12 col-md-6">
									<div class="single-services">
										<div class="service-content">
											<p>
												I have never used something so easy and
												efficient.KlivePay has become my number one choice for
												receiving payments and that is such an easy decision to
												make!
											</p>
										</div>

										<div class="service-icon">
											{/* <i class="lni lni-capsule"></i> */}
											<img src={Ellipse1} alt="testimonial" height={"75px"} />
											<div className="Paragrap">
												<h6>Charlie Kim</h6>
												<p>Finance Manager</p>
											</div>
										</div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Item>
				<Item>
					<section id="testimonials" class="services-area services-eight">
						{/* <!--======  Start Section Title Five ======--> */}
						<div class="section-title-five">{/* <!-- container --> */}</div>
						{/* <!--======  End Section Title Five ======--> */}
						<div class="container">
							<div class="row">
								<div class="mx-auto col-lg-12 col-md-6">
									<div class="single-services">
										<div class="service-content">
											<p>
												I have never used something so easy and
												efficient.KlivePay has become my number one choice for
												receiving payments and that is such an easy decision to
												make!
											</p>
										</div>

										<div class="service-icon justify-content-between">
											{/* <i class="lni lni-capsule"></i> */}
											<img src={Ellipse2} alt="testimonial" />
											<br />
											<div className="Paragrap">
												<h6>Theresa Webb</h6>
												<p>Head Of Finance</p>
											</div>
										</div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Item>
			</Carousel>
		</>
	);
}

export default service;

// <Carousel variant="dark">
// 	<Carousel.Item>
// 		<section id="testimonials" class="services-area services-eight">
// 			{/* <!--======  Start Section Title Five ======--> */}
// 			<div class="section-title-five">{/* <!-- container --> */}</div>
// 			{/* <!--======  End Section Title Five ======--> */}
// 			<div class="container">
// 				<div class="row">
// 					<div class="mx-auto col-lg-8 col-md-6">
// 						<div class="single-services">
// 							<div class="service-content">
// 								<h1
// 									style={{
// 										color: "#2D96D3",
// 										fontSize: "3.5rem",
// 										fontWeight: "900",
// 									}}>
// 									〃
// 								</h1>
// 								<p>
// 									Lorem ipsum dolor sit amet, adipscing elitr, sed diam
// 									nonumy eirmod tempor ividunt labor dolore magna.
// 								</p>
// 							</div>

// 							<div class="service-icon">
// 								{/* <i class="lni lni-capsule"></i> */}
// 								<img src={Ellipse} alt="testimonial" height={"75px"} />
// 								<h6>Albert Flores</h6>
// 								<div className="Paragrap">
// 									<p>Head Of Finance</p>
// 								</div>
// 							</div>
// 							<div></div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	</Carousel.Item>
// 	<Carousel.Item>
// 		<section id="testimonials" class="services-area services-eight">
// 			{/* <!--======  Start Section Title Five ======--> */}
// 			<div class="section-title-five">{/* <!-- container --> */}</div>
// 			{/* <!--======  End Section Title Five ======--> */}
// 			<div class="container">
// 				<div class="row">
// 					<div class="mx-auto col-lg-8 col-md-6">
// 						<div class="single-services">
// 							<div class="service-content">
// 								<h1
// 									style={{
// 										color: "#2D96D3",
// 										fontSize: "3.5rem",
// 										fontWeight: "900",
// 									}}>
// 									〃
// 								</h1>
// 								<p>
// 									Lorem ipsum dolor sit amet, adipscing elitr, sed diam
// 									nonumy eirmod tempor ividunt labor dolore magna.
// 								</p>
// 							</div>

// 							<div class="service-icon">
// 								{/* <i class="lni lni-capsule"></i> */}
// 								<img src={Ellipse1} alt="testimonial" height={"75px"} />
// 								<h6>Robert Fox</h6>
// 								<div className="Paragrap">
// 									<p>Head Of Finance</p>
// 								</div>
// 							</div>
// 							<div></div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	</Carousel.Item>
// 	<Carousel.Item>
// 		<section id="testimonials" class="services-area services-eight">
// 			{/* <!--======  Start Section Title Five ======--> */}
// 			<div class="section-title-five">{/* <!-- container --> */}</div>
// 			{/* <!--======  End Section Title Five ======--> */}
// 			<div class="container">
// 				<div class="row">
// 					<div class="mx-auto col-lg-8 col-md-6">
// 						<div class="single-services">
// 							<div class="service-content">
// 								<h1
// 									style={{
// 										color: "#2D96D3",
// 										fontSize: "3.5rem",
// 										fontWeight: "900",
// 									}}>
// 									〃
// 								</h1>
// 								<p>
// 									Lorem ipsum dolor sit amet, adipscing elitr, sed diam
// 									nonumy eirmod tempor ividunt labor dolore magna.
// 								</p>
// 							</div>

// 							<div class="service-icon">
// 								{/* <i class="lni lni-capsule"></i> */}
// 								<img src={Ellipse2} alt="testimonial" height={"75px"} />
// 								<h6>Theresa Webb</h6>
// 								<div className="Paragrap">
// 									<p>Head Of Finance</p>
// 								</div>
// 							</div>
// 							<div></div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	</Carousel.Item>
// </Carousel>
