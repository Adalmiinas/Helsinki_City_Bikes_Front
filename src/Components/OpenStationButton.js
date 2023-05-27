import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SingleStation from "./SingleStation";

/**
 * See more button that opens a modal with the single station info.
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
							margin: "auto",
							top: "0",
							bottom: "0",
							left: "0",
							right: "0",
							bgcolor: "white",
							p: 4,
							boxShadow: 24,
							borderRadius: "12px",
							overflow: "auto",
							maxWidth: "50%",
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
