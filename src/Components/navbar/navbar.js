import React from 'react'

const navbar = () => {
  return (
    <div>
          {/* <!--====== NAVBAR NINE PART START ======--> */}

<section class="navbar-area navbar-nine">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html">
            {/* <img src="assets/images/white-logo.svg" alt="Logo" /> */}<h4>Logo</h4>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
            aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine" style={{marginLeft:"5rem"}}>
            <ul class="navbar-nav me-auto me-5">
              <li class="nav-item ">
                <a class="page-scroll active text-black"  href="#hero-area">What We Do</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll text-black" href="#services">Our Services</a>
              </li>

              <li class="nav-item">
                <a class="page-scroll text-black" href="#pricing">Channel offered</a>
              </li>
              <li class="nav-item">
                <a class="page-scroll text-black" href="#contact">Testimonials</a>
              </li>
            </ul>
          </div>

          <div class="navbar-btn d-none d-lg-inline-block">
            {/* <a class="menu-bar" href="#side-menu-left"><i class="lni lni-menu"></i></a> */}
            {/* <!-- HTML !--> */}
           <button class="button-17" role="button">Register</button>


          </div>
        </nav>
        {/* <!-- navbar --> */}
      </div>
    </div>
    {/* <!-- row --> */}
  </div>
  {/* <!-- container --> */}
</section>

    </div>
  )
}

export default navbar