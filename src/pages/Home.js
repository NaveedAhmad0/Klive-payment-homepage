import React from "react";
// import { BrowserRouter } from "react-router-dom";
import Price from "../Components/Price/price";
import Service from "../Components/Service-component/service";
import Sidebar from "../Components/Sidebar/sidebar";
import Navbar from "../Components/navbar/navbar";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import About from "../Components/About/about";
import Ourservice from "../Components/Our-Service/ourservice";
import Channels from "../Components/Channels-offered/channels";
import "./Home.css";

const Home = () => {
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <Header />
      <Price />
      <Ourservice />
      <Channels />
      <Service />
      <Footer />
    </div>
    // </BrowserRouter>
  );
};

export default Home;
