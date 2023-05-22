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
	const headCells = [
		{
			id: "name",
			numeric: false,
			disablePadding: true,
			label: "Dessert (100g serving)",
		},
		{
			id: "calories",
			numeric: true,
			disablePadding: false,
			label: "Calories",
		},
		{
			id: "fat",
			numeric: true,
			disablePadding: false,
			label: "Fat (g)",
		},
		{
			id: "carbs",
			numeric: true,
			disablePadding: false,
			label: "Carbs (g)",
		},
		{
			id: "protein",
			numeric: true,
			disablePadding: false,
			label: "Protein (g)",
		},
	];

	return (
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
	);
}
