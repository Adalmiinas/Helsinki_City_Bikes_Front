import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

/**
 * handles the pagination on the table
 * @param {*} props count, page, rowsPerPage, onPageChange, table
 * @returns pagination
 */
function TablePaginationActions(props) {
	const theme = useTheme();

	const { count, page, rowsPerPage, onPageChange, table } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		if (table === "trip") {
			var newPage = Math.ceil(count / 10 - 1);

			onPageChange(event, newPage);
		} else {
			onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
		}
	};

	return (
		<>
			<Box
				sx={{ flexShrink: 0, ml: 2.5, display: "flex", flexDirection: "row" }}
			>
				<IconButton
					onClick={handleFirstPageButtonClick}
					disabled={page === 0}
					aria-label="first page"
				>
					{theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
				</IconButton>
				<IconButton
					onClick={handleBackButtonClick}
					disabled={page === 0}
					aria-label="previous page"
				>
					{theme.direction === "rtl" ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
				</IconButton>

				<p>{page}</p>

				<IconButton
					onClick={handleNextButtonClick}
					disabled={page === Math.ceil(count / 10 - 1)}
					aria-label="next page"
				>
					{theme.direction === "rtl" ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</IconButton>
				<IconButton
					onClick={handleLastPageButtonClick}
					disabled={count === 0}
					aria-label="last page"
				>
					{theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
				</IconButton>
			</Box>
		</>
	);
}

export default TablePaginationActions;

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};
