import { Button } from "@mui/material";
import { getStationById } from "../Service/StationInfo";
import { useEffect, useState } from "react";

const SingleStation = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getStation();
	}, []);

	const getStation = async () => {
		const [error, response] = await getStationById(props.stationId);
		console.log(response);
		console.log(error);
		if (error === null) {
			setData(response);

			console.log(data);
		}
	};

	return (
		<div>
			{data.map((stat) => {
				<p>{stat.name}</p>;
			})}
			<p></p>
		</div>
	);
};
export default SingleStation;
