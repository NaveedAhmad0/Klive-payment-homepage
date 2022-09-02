import React from 'react'

const sidebar = () => {
  return (
    <div>
        {/* <!--====== SIDEBAR PART START ======--> */}

<div class="sidebar-left">
  <div class="sidebar-close">
    <a class="close" href="#close"><i class="lni lni-close"></i></a>
  </div>
  <div class="sidebar-content">
    <div class="sidebar-logo">
      <a href="index.html"><img src="assets/images/logo.svg" alt="Logo" /></a>
    </div>
    <p class="text">Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi rerum iusto intro.</p>
    {/* <!-- logo --> */}
    <div class="sidebar-menu">
      <h5 class="menu-title">Quick Links</h5>
      <ul>
        <li><a href="javascript:void(0)">About Us</a></li>
        <li><a href="javascript:void(0)">Our Team</a></li>
        <li><a href="javascript:void(0)">Latest News</a></li>
        <li><a href="javascript:void(0)">Contact Us</a></li>
      </ul>
    </div>
    {/* <!-- menu --> */}
    <div class="sidebar-social align-items-center justify-content-center">
      <h5 class="social-title">Follow Us On</h5>
      <ul>
        <li>
          <a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="lni lni-youtube"></i></a>
        </li>
      </ul>
    </div>
    {/* <!-- sidebar social --> */}
  </div>
  {/* <!-- content --> */}
</div>
<div class="overlay-left"></div>

{/* <!--====== SIDEBAR PART ENDS ======--> */}
    </div>
  )
}

export default sidebar