import { Button } from "@mui/material";
import {
	GetDeparturesFromStation,
	GetReturnsForStation,
	getStationById,
} from "../Service/StationInfo";
import { useEffect, useState } from "react";

const SingleStation = (props) => {
	const [data, setData] = useState([]);
	const [departureCount, setDepartureCount] = useState([]);
	const [returnCount, setReturnCount] = useState([]);

	useEffect(() => {
		getStation();
		getDepartureCount();
		getReturnCount();
	}, []);

	const getStation = async () => {
		const [error, response] = await getStationById(props.stationId);

		if (error === null) {
			setData(response);
		}
	};
	const getDepartureCount = async () => {
		const [error, response] = await GetDeparturesFromStation(props.stationId);

		if (error === null) {
			setDepartureCount(response);
		}
	};

	const getReturnCount = async () => {
		const [error, response] = await GetReturnsForStation(props.stationId);

		if (error === null) {
			setReturnCount(response);
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
						<p>Departure: {departureCount[0].count}</p>
						<p>Return: {returnCount[0].count}</p>
					</>
				)}
		</div>
	);
};
export default SingleStation;
