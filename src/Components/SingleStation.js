import {
	getDeparturesFromStation,
	getReturnsForStation,
	getTop5DepartureStationsForStation,
	getTop5ReturnStationsForStation,
	getStationById,
	getAverageDistanceEndingForStation,
	getAverageDistanceStartingFromStation,
} from "../Service/StationInfo";
import { useEffect, useState } from "react";

const SingleStation = (props) => {
	const [data, setData] = useState([]);
	const [departureCount, setDepartureCount] = useState([]);
	const [returnCount, setReturnCount] = useState([]);
	const [topReturns, setTopReturns] = useState([]);
	const [topDepartures, setTopDepartures] = useState([]);
	const [distanceStarting, setDistanceStarting] = useState([]);
	const [distanceEnding, setDistanceEnding] = useState([]);

	useEffect(() => {
		getStation();
		getDepartureCount();
		getReturnCount();
		getTopDepartures();
		getTopReturns();
		getAverageDistanceStarting();
		getAverageDistanceEnding();
	}, []);

	const getStation = async () => {
		const [error, response] = await getStationById(props.stationId);

		if (error === null) {
			setData(response);
		}
	};
	const getDepartureCount = async () => {
		const [error, response] = await getDeparturesFromStation(props.stationId);

		if (error === null) {
			setDepartureCount(response);
		}
	};

	const getReturnCount = async () => {
		const [error, response] = await getReturnsForStation(props.stationId);

		if (error === null) {
			setReturnCount(response);
		}
	};

	const getTopDepartures = async () => {
		const [error, response] = await getTop5DepartureStationsForStation(
			props.stationId
		);

		if (error === null) {
			setTopDepartures(response);
		}
	};

	const getTopReturns = async () => {
		const [error, response] = await getTop5ReturnStationsForStation(
			props.stationId
		);

		if (error === null) {
			setTopReturns(response);
		}
	};

	const getAverageDistanceStarting = async () => {
		const [error, response] = await getAverageDistanceStartingFromStation(
			props.stationId
		);

		if (error === null) {
			setDistanceStarting(response);
		}
	};

	const getAverageDistanceEnding = async () => {
		const [error, response] = await getAverageDistanceEndingForStation(
			props.stationId
		);

		if (error === null) {
			setDistanceEnding(response);
		}
	};

	return (
		<div>
			{data.length > 0 &&
				departureCount.length > 0 &&
				returnCount.length > 0 && (
					<>
						<h2>{data[0].name}</h2>
						<p>Address: {data[0].address}</p>
						<h4>Total Number of Journeys</h4>
						<p>Departures from station: {departureCount[0].count}</p>
						<p>Returns to station: {returnCount[0].count}</p>
					</>
				)}
			{distanceStarting.length > 0 && distanceEnding.length > 0 && (
				<div>
					<p>
						The average distance of a journey starting from the station is{" "}
						{distanceStarting[0].count} metres.
					</p>
					<p>
						The average distance of a journey ending at the station is{" "}
						{distanceEnding[0].count} metres.
					</p>
				</div>
			)}
			{topReturns.length > 0 && topDepartures.length > 0 && (
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div>
						<h4>
							Top 5 most popular Return stations for journeys starting from the
							station
						</h4>
						{topReturns.map((row, index) => (
							<p key={index + row.total + row.name}>
								{index + 1}. {row.name}
							</p>
						))}
					</div>
					<div>
						<h4>
							Top 5 most popular Departure stations for journeys starting from
							the station
						</h4>
						{topDepartures.map((row, index) => (
							<p key={index + row.total + row.name}>
								{index + 1}. {row.name}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default SingleStation;
