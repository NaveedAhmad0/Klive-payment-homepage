import React from "react";
// import { BrowserRouter } from "react-router-dom";
import Price from "../Components/Price/price";
import Service from "../Components/Service-component/service";
import Navbar from "../Components/navbar/navbar";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Ourservice from "../Components/Our-Service/ourservice";
import Channels from "../Components/Channels-offered/channels";
import "./Home.css";

const Home = () => {
	return (
		// <BrowserRouter>
		<div>
			<Navbar />
			<br />
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
