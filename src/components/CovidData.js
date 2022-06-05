import React, { useEffect, useState } from "react";
import "../Stylesheets/CovidData.css";
import axios from "axios";


function CovidData() {
	const [country, setCountry] = useState("");
	const [cases, setCases] = useState("");
	const [recovered, setRecovered] = useState("");
	const [deaths, setDeaths] = useState("");
	const [todayCases, setTodayCases] = useState("");
	const [deathCases, setDeathCases] = useState("");
	const [recoveredCases, setRecoveredCases] = useState("");
	const [userInput, setUserInput] = useState("");

	useEffect(() => {

		fetch("https://disease.sh/v3/covid-19/countries")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	const setData = ({
		country,
		cases,
		deaths,
		recovered,
		todayCases,
		todayDeaths,
		todayRecovered,
	}) => {
		setCountry(country);
		setCases(cases);
		setRecovered(recovered);
		setDeaths(deaths);
		setTodayCases(todayCases);
		setDeathCases(todayDeaths);
		setRecoveredCases(todayRecovered);
	};

	const handleSearch = (e) => {
		setUserInput(e.target.value);
	};
	const handleSubmit = async (props) => {

		props.preventDefault();
		try {
			const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${userInput}`)
			setData(response.data);
		}
		catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="covidData">
			<h1>CURRENT COVID-19 DATA</h1>
			<div >
				<form onSubmit={handleSubmit}>
					{/* input county name */}
					<input onChange={handleSearch} placeholder="Enter Country Name" />
					<br />
					<button type="submit">Search</button>
				</form>
			</div>

			{/* Showing the details of the country */}
			<div className="covidInfo">
				<p>Country Name : {country} </p>

				<p>Cases : {cases}</p>

				<p>Deaths : {deaths}</p>

				<p>Recovered : {recovered}</p>

				<p>Cases Today : {todayCases}</p>

				<p>Deaths Today : {deathCases}</p>

				<p>Recovered Today : {recoveredCases}</p>
			</div>
		</div>
	);
}

export default CovidData;
