import React from "react";
import BG from "./images/intro-about.jpg";
import "./ApiDetails.css";
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/Footer/footer";

const ApiDetails = () => {
	return (
		<div>
			<Navbar />
			<div className="wrap">
				<div className="introInnerBox left">
					<div className="introPic">
						<img src={BG} alt="BG" />
					</div>

					<div className="introInnerInn">
						<h4>
							We're committed to helping your
							<br />
							business run better.
						</h4>
					</div>
				</div>

				<div className="bodyApi">
					<div className="content">
						<h1 className="h1Heading">Merchant API</h1>

						<h2 className="headingClr">Introduction</h2>

						<div className="box-list">
							This documentation describes the protocol of communication between
							a payee and expay payment gateway and serves as a guide for
							arranging acceptance of payments for goods and (or) services.
						</div>

						<div className="box-list">
							This documentation is designed for the software developers on the
							payee’s edge.
						</div>

						<table>
							<thead>
								<tr>
									<td>&nbsp;</td>
									{/* <!-- <td>Sandbox</td> --> */}
									<td>Production server</td>
								</tr>
							</thead>

							<tbody>
								<tr className="color">
									<td>IP-address</td>
									{/* <!-- <td>54.169.228.181</td> --> */}
									<td>
										52.76.228.42
										<br />
										52.76.227.77
									</td>
								</tr>
								<tr>
									<td>Communication URL</td>
									{/* <!-- <td>https://api.sandbox.expay.asia/merchant/</td> --> */}
									<td>https://api.expay.asia/merchant/</td>
								</tr>
								<tr className="color">
									<td>Client area</td>
									{/* <!-- <td>https://client.sandbox.expay.asia/</td> --> */}
									<td>https://client.expay.asia/</td>
								</tr>
								<tr>
									{/* <!--<td>Test Utilities</td> */}
									{/* <td>https://api.sandbox.expay.asia/merchant/tools</td>
            <td>https://api.expay.asia/merchant/tools</td>
            </tr>--> */}
								</tr>
							</tbody>
						</table>

						<h4>
							The complete payment process is described below in the Sequence
							Diagram format:
						</h4>

						<img src="./API_files/uml-expay-payee_en.png" alt="" />
						<br />
						<br />
						<br />

						{/* <!-- <h2 className="headingClr">Request format</h2> */}

						{/* <div className="box-list">To send a request, you should create a list of parameters and send it to the relevant
        method of the gateway in HTTP 1.0 format.
    </div>
     --> */}

						{/* <!-- Registration api --> */}

						<div>
							<div className="titleBox">
								<h5>Registration api</h5>
							</div>

							<pre>
								<code>https://backend.klivepay.com/api/merchant/register</code>
							</pre>

							<div className="box-list">
								Description:
								<br />
								<strong>typeOfstream value should be ‘api’</strong>
								<br />
							</div>

							<div className="box-list">
								Method:
								<br />
								<strong>Post</strong>
								<br />
							</div>
							<h2 className="headingClr">Request Body: required fields</h2>

							<strong>
								<pre>
									{" "}
									<code>
										<span>{"{"}</span>
										<span>"name</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"mobile"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"email"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"password"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"typeOfStream"</span>
										<span>:</span> <span>"string"</span>
										<span>{"}"}</span>
										<span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</code>
								</pre>
							</strong>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"statuscode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">200</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"registered successfully"
									</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Login Api --> */}

						<div>
							<div className="titleBox">
								<h5>Login Api</h5>
							</div>

							<pre>
								<code>https://backend.klivepay.com/api/merchant/login</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Post</strong>
								<br />
							</div>
							<h2 className="headingClr">Request Body: required</h2>

							<strong>
								<pre>
									{" "}
									<code>
										<span>{"{"}</span>
										<span>"email"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"password"</span>
										<span>:</span> <span>"string"</span>
										<span>{"}"}</span>
										<span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</code>
								</pre>
							</strong>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<br />
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">200</span>
									<span className="token punctuation">,</span>
									<br />
									<br />
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Login successfully"</span>
									<span className="token punctuation">,</span>
									<br />
									<br />
									<span className="token string">"accessToken"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZ3JzQGdtYWlsLmNvbSIsImlzTWVyY2hhbnQiOnRydWUsImlhdCI6MTY2OTY5NjI3MywiZXhwIjoxN
										jY5NzgyNjczfQ.h116nQFUarSLf4s5bAeAokkPDyVyELXDZ33IUNUNeUo"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<br />
									<span className="token string">"merchantUid"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"4b9e27ae-a5a9-487d-99d2-9c46d618e6cd"
									</span>
									<br />
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Get Profile Api --> */}

						<div>
							<div className="titleBox">
								<h5>Get Profile Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/get-profile?email={mail}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>Email:string ,required field</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<br />
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"success"</span>
									<br />
									<span className="token string">"merchant"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<br />
									<span className="token string">"id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">37</span>
									<span className="token punctuation">,</span>
									<br />
									<br />
									<span className="token string">"merchantId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<br />
									<span className="token string">"merchantNameEnglish"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"mobile"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9878767876"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"password"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"$2b$10$1zEpdwNOvep..6GQ18fquu6LZvixSimBS4JlQ4EWXyURCK9deFQR6"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"merchantName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"personType"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"individual"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"InitialShop"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"sjdlksdfh"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"firstName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merch"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"surName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ant"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"yearOfBirth"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"1999"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"monthOfBirth"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"12"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"dayOfBirth"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"12"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"address"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"sdjfkhsjd"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"province"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"kjhsdfkjh"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"district"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"skdjfh"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"subDivision"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"skdjfh"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"pincode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"12312312"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"shopType"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"social"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"creditCard"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"weChat"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">false</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"livePayment"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"mobileBanking"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"trueWallet"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"shopeePay"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">false</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"alone"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">false</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"website"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"www.weebsite.com/"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"facebook"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"www.facebook.com/"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"linkedin"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"linkedin"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"instagram"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"www.instagram.com/"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"other"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"othera"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"company"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"sdkjf"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"bank"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"skdjfhk"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"bankAccount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"12317928371982"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"rnfCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ksjdhf"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"domestic"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"jdhfskj"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"inter"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"kjdhfhkjsdf"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"rateQrCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ksjdfh"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"rateBarCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"kjhsdkf"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"copyOfId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">""</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"logo"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">""</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"bankBook"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQRTd161XPmfnAPtfJ+J8/wA/1+hcuIvaEWv99Jz9qOX0fLXV2uXrPGAj6eJy14/8tfKJz6+F8b4VwSyOcZVu11Jj5IsjWqbhp5tU7/YzB1extJcErSyT25Pq/YZT8nUoaZzcXerbddCAAxaZSlSuPhZppj/ivYZgo00x/wAV7Bpj/ivYZgZGmmP+K9g0x/xXsMwMjTTH/FewaY/4r2GYGRppj/ivYNMf8V7DMDImSqTogAgAAAAAAAAAAAqvfkHV7cgAJenSqbvxOrg4cPLHN5nHVf3nVLqvScgEg6vbkCAA9RMoyjzROPaSk3stw3HTUU93e4H6vsvsngMvZeHPnwpycblK2dUOxuyskNccMXHlepo17Fx952Jw0ZK4uFP2s7I8Jjjj7tQem7r0geeuxeyndYY7K357+ZK7C7MatcOmuqkz0PJo6m9Lt3f7loYtEdMYtIDzV2F2ZJWsCfqkyfoHs38uveZ6MMXdxqMWkW0vowPJl2P2THIsbwpTfJO858tv+zLv599Xf5O71c9T5HngWjhPhPXoZM800sefI9t3qfM1jmi4Q1cVljL727PKAtHCs9ehlzzU2sefI49dTNpZo6MTXEZLf1vPZ5IFo4Vnr1O9Wr/5WTl1lV2v+yuTM1BPHxOWUr3TbPNAtBWXp4s03Bueed9NbTJWaLSviM0XW/nPd0eWBaOFZ69eWXG5S08VlS8PObv+DmjnyuaTzZEr8Zs4QI8o4T4zP7ejm4iepd3myVX+T+ZPfZO51d/K/wBbu76eo80C0cKT12viM342T3mDiBbxxKT1/9k="
										"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"otherDocument"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">""</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"assignedUser"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"user1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transaction"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">2</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"withdraw"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">2</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"typeOfStreem"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">null</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Update Profile APi --> */}

						<div>
							<div className="titleBox">
								<h5>Update Profile APi</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/update-profile?email={email}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Patch</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>Email:string ,required field</strong>
								<br />
							</div>

							<h2 className="headingClr">Request Body:</h2>

							<strong>
								<pre>
									{" "}
									<code>
										<span>{"{"}</span>
										<span>"merchantId"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"merchantNameEnglish"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"merchantName"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"personType"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"InitialShop"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"firstName"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"surName"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"yearOfBirth"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"monthOfBirth"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"dayOfBirth"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"mobile"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"address"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"province"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"district"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"subDivision"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"pincode"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"shopType"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"creditCard"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"weChat"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"livePayment"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"mobileBanking"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"trueWallet"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"shopeePay"</span>
										<span>:</span> <span>true</span>
										<span>,</span>
										<br />
										<span>"alone"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"website"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"facebook"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"linkedin"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"instagram"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"other"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"company"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"bank"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"bankAccount"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"domestic"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"inter"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"rateQrCode"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"rateBarCode"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"copyOfId"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"logo"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"bankBook"</span>
										<span>:</span> <span>"string"</span>
										<span>,</span>
										<br />
										<span>"otherDocument"</span>
										<span>:</span> <span>"string"</span>
										<span>{"}"}</span>
										<span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</code>
								</pre>
							</strong>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">200</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Updated successfully"</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Create Invoice Api --> */}

						<div>
							<div className="titleBox">
								<h5>Create Invoice Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/create-invoice?merchantId={id}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Post</strong>
								<br />
							</div>

							<div className="box-list">
								Params:Required
								<br />
								<strong>merchantId :string , required field</strong>
								<br />
							</div>
							<h2 className="headingClr">Request Body: required fields</h2>

							<strong>
								<pre>
									{" "}
									<code>
										<span>{"{"}</span>
										<span>"mobile"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"totalamount"</span>
										<span>:</span> <span>"number"</span>
										<span>,</span>
										<br />
										<span>"expirydate"</span>
										<span>:</span> <span>"string"</span>
										<span>{"}"}</span>
										<span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</code>
								</pre>
							</strong>

							<div className="box-list">
								Description:
								<br />
								<strong>
									expiry date format should be like yyyy-mm-dd hh:mm:s EX:
									2022-29-12 05:06:21
								</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>
							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span> <br />
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">200</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Invoice created"</span> <br />
									<span className="token string">"qrdata:"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"expiryDate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"2022-12-29 05:06:21"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrRawData"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"00020101021230870016A00000067701011201150123555008063010220YNN2R94SY0740THN19U30320OWABT16PVH71R20OTTCT53037645402105802TH62070703SCB6304AE39"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"numberOfTimes"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrImage"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"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"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
							<div className="box-list">
								If merchant is not assigned to any user then the response will
								be:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"message"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"Merchant is not assigned to any User"
									</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* //  Get Invoice list Api  */}

						<div>
							<div className="titleBox">
								<h5>Get Invoice list Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/get-invoice?email={mail}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>Email : string, required field</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>
							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"["}</span> <br />
									<span className="token punctuation">{"{"}</span> <br />
									<span className="token string">"id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"merchantId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"invoiceRefId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"inv#801492"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"mobile"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9876767876"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billTo"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"user1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billFrom"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"status"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"createdAt"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-10T11:13:07.062Z"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"totalamount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">20</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"expirydate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"2022-11-28 09:09:10"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrRawData"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"00020101021230870016A000000677010112011501235550080630102200AXYF8AN9AVJ5LX6T6OC0320YC3HJTEFXV357E5ERNE453037645402205802TH62070703SCB63044F97"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"numberOfTimes"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrImage"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"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"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"0AXYF8AN9AVJ5LX6T6OC"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"YC3HJTEFXV357E5ERNE4"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"note"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">null</span>
									<span className="token punctuation">{"}"}</span>{" "}
									<span className="token punctuation">,</span>
									<br />
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">4</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"merchantId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"invoiceRefId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"inv#251822"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"mobile"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"123456789"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billTo"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"user1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billFrom"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"status"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"createdAt"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-23T08:05:02.965Z"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"totalamount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">10</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"expirydate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"2022-11-28 09:09:10"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrRawData"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"00020101021230870016A00000067701011201150123555008063010220ZBVBA612J3YTAC2MMCM603201M03QV72QTKPFGTR7DJ053037645402105802TH62070703SCB6304FECF"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"numberOfTimes"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrImage"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"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"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ZBVBA612J3YTAC2MMCM6"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"1M03QV72QTKPFGTR7DJ0"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"note"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">null</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"]"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Invoice Details Api --> */}

						<div>
							<div className="titleBox">
								<h5>Invoice Details Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/invoice-details/{invoiceId}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>Invoiceid:number ,required field</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>
							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"merchantId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"invoiceRefId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"inv#801492"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"mobile"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9876767876"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billTo"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"user1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billFrom"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"merchant1@gmail.com"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"status"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">true</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"createdAt"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-10T11:13:07.062Z"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"totalamount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">20</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"expirydate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"2022-11-28 09:09:10"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrRawData"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"00020101021230870016A000000677010112011501235550080630102200AXYF8AN9AVJ5LX6T6OC0320YC3HJTEFXV357E5ERNE453037645402205802TH62070703SCB63044F97"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"numberOfTimes"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"qrImage"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"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"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"0AXYF8AN9AVJ5LX6T6OC"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reference2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"YC3HJTEFXV357E5ERNE4"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"note"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">null</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Transaction List Api --> */}

						<div>
							<div className="titleBox">
								<h5>Transaction List Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/sandBox-transactionList?merchantId={merchantid}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>merchantId:string , required field</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"data"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">[</span>
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"t_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_merchant_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_proxy_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"012355500806301"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_proxy_type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"BILLERID"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_account_number"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"3882520143"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"WORLD NEED LTD.,PART."</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_account_number"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9864684175"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_account_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"MISSSUPHAPHIT RUJIPUTTHANYAPAT"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"MISSSUPHAPHIT RUJIPUTTHANYAPAT"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_sending_bank_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"006"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_receiving_bank_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"014"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"20"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_transaction_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"223142139FI760792B006B112476079206"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">
										"t_transaction_dateand_time"
									</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-10T21:39:53.420+07:00"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"0AXYF8AN9AVJ5LX6T6OC"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"YC3HJTEFXV357E5ERNE4"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref3"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"SCB"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_currency_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"764"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_channel_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"PMH"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_transaction_type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Domestic Transfers"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_final_amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">9.8</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"t_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">2</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_merchant_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"182add3b-6a92-4f4f-bdca-e25da4bf32a3"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_proxy_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"012355500806301"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_proxy_type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"BILLERID"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_account_number"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"3882520143"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payee_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"WORLD NEED LTD.,PART."</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_account_number"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9864684175"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_account_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"MISSSUPHAPHIT RUJIPUTTHANYAPAT"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_payer_name"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"MISSSUPHAPHIT RUJIPUTTHANYAPAT"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_sending_bank_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"006"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_receiving_bank_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"014"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"10"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_transaction_id"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"223142139FI760792B006B112476079206"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">
										"t_transaction_dateand_time"
									</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-24T15:35:09.900+07:00"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ZBVBA612J3YTAC2MMCM6"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"1M03QV72QTKPFGTR7DJ0"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_bill_payment_ref3"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"SCB"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_currency_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"764"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_channel_code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"PMH"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_transaction_type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Domestic Transfers"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"t_final_amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">9.8</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"]"},</span>
									<br />
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">2</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* // <!-- Payment Enquiry Api --> */}

						<div>
							<div className="titleBox">
								<h5>Payment Enquiry Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/payment-inquiry?merchantId={merchantId}&date={date}&reference1={ref1}&reference2={ref2}"
									}
								</code>
							</pre>

							<div className="box-list">
								Example:
								<br />
								<strong>
									<pre>
										<code>
											https://backend.klivepay.com/api/merchant/payment-inquiry?merchantId=182add3b-6a92-4f4f-bdca-e25da4bf32a3&date=2022-11-24&reference1=ZBVBA612J3YTAC2MMCM6&reference2=1M03QV72QTKPFGTR7DJ0
										</code>
									</pre>
								</strong>
							</div>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>
									MerchantId:string ,required field
									<br />
									Date:yyyy-mm-dd(txn date) ,required field
									<br />
									Reference1:string,required field
									<br />
									Reference:string, required field
								</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className=" language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"status"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1000</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"description"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Success"</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token string">"data"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"["}</span>
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"eventCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"00300100"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transactionType"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Domestic Transfers"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"reverseFlag"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payeeProxyId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"012355500806301"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payeeProxyType"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"BILLERID"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payeeAccountNumber"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"3882520143"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payeeName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"WORLD NEED LTD.,PART."</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payerProxyId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payerProxyType"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payerAccountNumber"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"9864684175"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"payerName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"MISSSUPHAPHIT RUJIPUTTHANYAPAT"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"sendingBankCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"006"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"receivingBankCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"014"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"10.00"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transactionId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"223281535FI519467B006B112451946706"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"fastEasySlipNumber"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"232815519467"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transactionDateandTime"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"2022-11-24T15:35:09.900+07:00"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billPaymentRef1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"ZBVBA612J3YTAC2MMCM6"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billPaymentRef2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"1M03QV72QTKPFGTR7DJ0"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"billPaymentRef3"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"SCB"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"currencyCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"764"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"equivalentAmount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"equivalentCurrencyCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"exchangeRate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"channelCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"PMH"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"partnerTransactionId"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"tepaCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">'"'</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token punctuation">&#125</span>
									<span className="token punctuation">{"]"}</span>
									<span className="token punctuation">&#125</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>

						{/* //  Slip Verification Api  */}

						<div>
							<div className="titleBox">
								<h5>Slip Verification Api</h5>
							</div>

							<pre>
								<code>
									{
										"https://backend.klivepay.com/api/merchant/slipVerification?merchantId={merchantId}&slipVerification={slipnumber}"
									}
								</code>
							</pre>

							<div className="box-list">
								Method:
								<br />
								<strong>Get</strong>
								<br />
							</div>

							<div className="box-list">
								Params:
								<br />
								<strong>
									merchantId string,required
									<br />
									SlipVerification:string,required
								</strong>
								<br />
							</div>

							<h2 className="headingClr">Response format</h2>

							<div className="box-list">
								During communication with the system the response always comes
								in
								<strong>JSON</strong>
								format and encoded in <strong>UTF-8</strong>.<br />
								<br />
								If the request is successful, you will receive the{" "}
								<strong>response</strong> node. Example:
							</div>

							<pre className="line-numbers language-javascript">
								<code className="language-javascript">
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"status"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"code"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token number">1000</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"description"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"Success"</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token string">"data"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"amount"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"40.00"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transRef"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">
										"202210273O2brONjCpkC6NaeE"
									</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transTime"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"14:44:43"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"receiver"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"proxy"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"BILLERID"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"value"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"012355500806301"</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token string">"displayName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">WORLD NEED LTD.,PART""</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"account"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"DUMMY"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"value"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"0141111111111"</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token string">"sender"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"displayName"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"นาย ทนงศักดิ์ โ."</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"account"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token punctuation">{"{"}</span>
									<span className="token string">"type"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"BANKAC"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"value"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"xxxx-xx311-9"</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"}"},</span>
									<br />
									<span className="token string">"ref3"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"SCB"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"countryCode"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"TH"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"sendingBank"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"014"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"receivingBank"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"014"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"transDate"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"20221027"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"ref2"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"MSRJEOXIPM6A76RO9IHC"</span>
									<span className="token punctuation">,</span>
									<br />
									<span className="token string">"ref1"</span>
									<span className="token punctuation">:</span>{" "}
									<span className="token string">"G29TJXYSRFU4YP5PWCR3"</span>
									<span className="token punctuation">{"}"}</span>
									<span className="token punctuation">{"}"}</span>
									<span className="line-numbers-rows">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</span>
								</code>
							</pre>
						</div>
					</div>
				</div>

				{/* <a href="https://www.expay.asia/en/api.html#" className="link-feedback"></a>
				<div className="layerBox" style="display: none;"></div> */}

				{/* <ul
					className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
					id="ui-id-1"
					tabindex="0"
					style={{ display: "none" }}>
                </ul>
				<span
					role="status"
					aria-live="assertive"
					aria-relevant="additions"
					className="ui-helper-hidden-accessible">   
                </span> */}
			</div>
			<Footer />
		</div>
	);
};

export default ApiDetails;
