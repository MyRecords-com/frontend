import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Routes, Route, Navigate } from 'react-router-dom'
import MyRecordsPage from './pages/MyRecordsPage/MyRecordsPage'
import MyHomePage from './pages/MyHomePage/MyHomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import MyDashboard from "./pages/MyDashboard/MyDashboard";
import NavBar from './components/NavBar/NavBar'

export default function App() {
	return (
		<main className="App">
			<NavBar />
			<Routes>
				<Route path="/myrecords" element={<MyRecordsPage />} />
				<Route path="/records" element={<SearchPage />} />
				<Route path="" element={<MyHomePage />} />
				<Route path="/dashboard" element={<MyDashboard />} />
			</Routes>
		</main>
	)
}













/********** */                                          /********** */
///////////// THIS IS THE STARTER CODE FOR REACT-DJANGO /////////////
/********** */                                         /********** */


// class App extends React.Component {
// 	state = {
// 		details: [],
// 		user: "",
// 		quote: "",
// 	};

// 	componentDidMount() {
// 		let data;

// 		axios
// 			.get("http://localhost:8000/wel/")
// 			.then((res) => {
// 				data = res.data;
// 				this.setState({
// 					details: data,
// 				});
// 			})
// 			.catch((err) => {});
// 	}

// 	renderSwitch = (param) => {
// 		switch (param + 1) {
// 			case 1:
// 				return "primary ";
// 			case 2:
// 				return "secondary";
// 			case 3:
// 				return "success";
// 			case 4:
// 				return "danger";
// 			case 5:
// 				return "warning";
// 			case 6:
// 				return "info";
// 			default:
// 				return "yellow";
// 		}
// 	};

// 	handleInput = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		axios
// 			.post("http://localhost:8000/wel/", {
// 				name: this.state.user,
// 				detail: this.state.quote,
// 			})
// 			.then((res) => {
// 				this.setState({
// 					user: "",
// 					quote: "",
// 				});
// 			})
// 			.catch((err) => {});
// 	};

// 	render() {
// 		return (
// 			<div className="container jumbotron ">
// 				<form onSubmit={this.handleSubmit}>
// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"
// 								id="basic-addon1">
// 								{" "}
// 								Author{" "}
// 							</span>
// 						</div>
// 						<input type="text" className="form-control"
// 							placeholder="Name of the Poet/Author"
// 							aria-label="Username"
// 							aria-describedby="basic-addon1"
// 							value={this.state.user} name="user"
// 							onChange={this.handleInput} />
// 					</div>

// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text">
// 							Your Quote
// 							</span>
// 						</div>
// 						<textarea className="form-control "
// 								aria-label="With textarea"
// 								placeholder="Tell us what you think of ....."
// 								value={this.state.quote} name="quote"
// 								onChange={this.handleInput}>
// 						</textarea>
// 					</div>

// 					<button type="submit" className="btn btn-primary mb-5">
// 						Submit
// 					</button>
// 				</form>

// 				<hr
// 					style={{
// 						color: "#000000",
// 						backgroundColor: "#000000",
// 						height: 0.5,
// 						borderColor: "#000000",
// 					}}
// 				/>

// 				{this.state.details.map((detail, id) => (
// 					<div key={id}>
// 						<div className="card shadow-lg">
// 							<div className={"bg-" + this.renderSwitch(id % 6) +
// 										" card-header"}>Quote {id + 1}</div>
// 							<div className="card-body">
// 								<blockquote className={"text-" + this.renderSwitch(id % 6) +
// 												" blockquote mb-0"}>
// 									<h1> {detail.detail} </h1>
// 									<footer className="blockquote-footer">
// 										{" "}
// 										<cite title="Source Title">{detail.name}</cite>
// 									</footer>
// 								</blockquote>
// 							</div>
// 						</div>
// 						<span className="border border-primary "></span>
// 					</div>
// 				))}
// 			</div>
// 		);
// 	}
// }
// export default App;
