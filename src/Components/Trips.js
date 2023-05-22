import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { useEffect, useState } from "react";
import { getAllTrips } from "../Service/TripInfo";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePaginationActions from "./Pagination";

export default function TripsTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	useEffect(() => {
		getTrips();
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

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		"&:nth-of-type(odd)": {
			backgroundColor: "#bfe3f9",
		},
		"&:nth-of-type(even)": {
			backgroundColor: "white",
		},
	}));

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: "#1a7ac8",
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}));

	const getTrips = async () => {
		setLoading(true);
		const [error, response] = await getAllTrips();

		if (error !== null) {
			setApiError(error);
		}

		if (response != null) {
			setData(response);
		}
		setLoading(false);
	};

	return (
		<>
			<h1>List of Trips in May 2021</h1>
			<Paper sx={{ width: "100%", overflow: "hidden" }}>
				<TableContainer sx={{ maxHeight: 700 }} component={Paper}>
					<Table
						stickyHeader
						sx={{ minWidth: 500 }}
						aria-label="custom pagination table"
					>
						<TableHead>
							<TableRow>
								<StyledTableCell style={{}}>
									<TableSortLabel>Departure Station</TableSortLabel>
								</StyledTableCell>
								<StyledTableCell>Return Station</StyledTableCell>
								<StyledTableCell>Covered Distance (m)</StyledTableCell>
								<StyledTableCell>Duration (sec.)</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{(rowsPerPage > 0
								? data.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage
								  )
								: data
							).map((row) => (
								<StyledTableRow key={row.departure + row.id}>
									<TableCell component="th" scope="row">
										{row.departureStationName}
									</TableCell>
									<TableCell>{row.returnStationName}</TableCell>
									<TableCell>{row.distance}</TableCell>
									<TableCell>{row.duration}</TableCell>
								</StyledTableRow>
							))}

							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={4} />
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
			</Paper>
		</>
	);
}
