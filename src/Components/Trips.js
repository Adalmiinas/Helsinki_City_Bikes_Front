import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { useEffect, useState } from "react";
import { getCountOfTrips, getOnePageOfTrips } from "../Service/TripInfo";
import TablePaginationActions from "./Pagination";
import { StyledTableCell, StyledTableRow } from "./StyledTable";

export default function TripsTable() {
	const [page, setPage] = React.useState(0);
	const [lastPage, setLastPage] = React.useState(0);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const [apiError, setApiError] = useState(null);

	useEffect(() => {
		getTrips(page);
	}, [page]);

	useEffect(() => {
		getTrips(page);
		setRefresh(false);
	}, [page, refresh]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		setRefresh(true);
	};

	const getTrips = async (page) => {
		setLoading(true);

		const [error, response] = await getOnePageOfTrips(page + 1);
		const [countError, data] = await getCountOfTrips();

		if (error !== null) {
			setApiError(error);
		}

		if (countError !== null) {
			setApiError(countError);
		}

		if (response != null) {
			setData(response);
		}
		if (data != null) {
			setLastPage(data[0].count);
		}

		setLoading(false);
	};

	return (
		<>
			<h1>List of Trips</h1>
			{loading && (
				<TableRow>
					<TableCell>Getting data...</TableCell>
				</TableRow>
			)}
			<Paper sx={{ width: "100%", overflow: "hidden" }}>
				<TableContainer sx={{ maxHeight: 700 }} component={Paper}>
					<Table
						stickyHeader
						sx={{ minWidth: 500 }}
						aria-label="custom pagination table"
					>
						<TableHead>
							<TableRow>
								<StyledTableCell> Departure Station</StyledTableCell>
								<StyledTableCell>Return Station</StyledTableCell>
								<StyledTableCell>Covered Distance (m)</StyledTableCell>
								<StyledTableCell>Duration (sec.)</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => (
								<StyledTableRow key={row.departure + row.id}>
									<TableCell component="th" scope="row">
										{row.departureStationName}
									</TableCell>
									<TableCell>{row.returnStationName}</TableCell>
									<TableCell>{row.distance}</TableCell>
									<TableCell>{row.duration}</TableCell>
								</StyledTableRow>
							))}

							{apiError && (
								<TableRow>
									<TableCell>{apiError}</TableCell>
								</TableRow>
							)}
						</TableBody>
						<TableFooter>
							<TableRow
								style={{
									display: "flex",
									flexDirection: "row",
								}}
							>
								<TableCell>
									<TablePaginationActions
										onPageChange={handleChangePage}
										page={page}
										count={lastPage}
										table={"trip"}
									/>
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
}
