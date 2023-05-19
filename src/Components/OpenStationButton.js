import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SingleStation from "./SingleStation";

/**
 * Update project button that opens a modal with the form.
 * @param {*} props
 */
const OpenStationButton = (props) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<>
			<div>
				<Button
					onClick={handleOpen}
					style={{
						maxHeight: "10px",
						minHeight: "10px",
					}}
				>
					See more
				</Button>
				<Modal open={open} onClose={handleClose}>
					<Box
						sx={{
							position: "absolute",
							display: "flex",
							flexDirection: "column",
							top: "15%",
							left: "40%",
							width: "100%",
							bgcolor: "white",

							p: 4,
							boxShadow: 24,
							borderRadius: "12px",
							overflow: "auto",
							maxWidth: "20%",
							maxHeight: "70%",
							zIndex: "modal",
						}}
					>
						<SingleStation open={setOpen} stationId={props.stationId} />
					</Box>
				</Modal>
			</div>
		</>
	);
};
export default OpenStationButton;
