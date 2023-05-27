import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { useEffect, useState } from "react";
import TablePaginationActions from "./Pagination";
import { getAllStations } from "../Service/StationInfo";
import OpenStationButton from "./OpenStationButton";
import { StyledTableCell, StyledTableRow } from "./StyledTable";

/**
 * Creates the table and adds the data
 * @returns stations table
 */
export default function StationsTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);
	const [inputText, setInputText] = useState("");

	useEffect(() => {
		getStations();
	}, []);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	//input handler for the search
	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};

	//Get all stations
	const getStations = async () => {
		setLoading(true);
		const [error, response] = await getAllStations();

		if (error !== null) {
			setApiError(error);
		}

		if (response != null) {
			setData(response);
		}
		setLoading(false);
	};

	//filter the station data with the search input
	const filteredData = data.filter((el) => {
		if (inputText === null) {
			return el;
		} else {
			if (el.name != null) {
				return el.name.toLowerCase().includes(inputText);
			}
			return "";
		}
	});

	return (
		<>
			<TextField
				style={{
					width: "100%",
					marginTop: "20px",
					marginBottom: "20px",
					marginLeft: "5px",
					align: "center",
				}}
				id="search"
				label="Search"
				variant="outlined"
				onChange={inputHandler}
			/>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Station</StyledTableCell>
							<StyledTableCell></StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? filteredData.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: filteredData
						).map((row) => (
							<StyledTableRow key={row.id + row.stationId}>
								<TableCell component="th" scope="row">
									{row.englishName}
								</TableCell>
								<TableCell style={{ width: 160 }} align="right">
									<OpenStationButton stationId={row.stationId} />
								</TableCell>
							</StyledTableRow>
						))}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
						{loading && (
							<TableRow>
								<TableCell>Getting data...</TableCell>
							</TableRow>
						)}
						{apiError && (
							<TableRow>
								<TableCell>{apiError}</TableCell>
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25]}
								colSpan={3}
								count={data.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: {
										"aria-label": "rows per page",
									},
									native: true,
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	);
}
