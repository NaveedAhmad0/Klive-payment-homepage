import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo/K Live Pay.png";
const navbar = () => {
	return (
		<div>
			{/* <!--====== NAVBAR NINE PART START ======--> */}
			<section class="navbar-area navbar-nine">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12">
							<Navbar bg="" expand="lg">
								<Container>
									<Navbar.Brand
										href="#home"
										style={{ fontSize: "23px", fontWeight: "900",  }}>
										<img src={logo} alt="logo" width={160} height={60} />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse id="basic-navbar-nav">
										<Nav className="me-auto" style={{ marginLeft: "auto" }}>
											<Nav.Link className="nav-links fw-bolder" href="#introduction">
												Introduction
											</Nav.Link>
											<Nav.Link className="nav-links fw-bolder" href="#whatwedo">
												What We Do
											</Nav.Link>
											<Nav.Link className="nav-links fw-bolder" href="#ourservices">
												Our Services
											</Nav.Link>
											<Nav.Link className="nav-links fw-bolder" href="#channeloffered">
												Channels
											</Nav.Link>
											<Nav.Link className="nav-links fw-bolder" href="#testimonials">
												Testimonials
											</Nav.Link>
										</Nav>
										<div class="navbar-btn d-none d-lg-inline-block">
											<button class="button-17">Register</button>
										</div>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							{/* <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html">
            <h2>Logo</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
            aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine" style={{marginLeft:"7rem"}}>
            <ul class="navbar-nav me-auto me-5">
              <li class="nav-item ">
                <a class="page-scroll active text-black"  href="#whatwedo">What We Do</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll text-black" href="#ourservices">Our Services</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll text-black" href="#channeloffered">Channel offered</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll text-black" href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <div class="navbar-btn d-none d-lg-inline-block">
           <button class="button-17" role="button">Register</button>
          </div>
        </nav> */}
							{/* <!-- navbar --> */}
						</div>
					</div>
					{/* <!-- row --> */}
				</div>
				{/* <!-- container --> */}
			</section>
		</div>
	);
};

export default navbar;
