import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Container } from "@mui/system";

const Navbar = () => {
	return (
		<div>
			<AppBar position="sticky" sx={{ bgcolor: "white" }}>
				<Container maxWidth="l">
					<Toolbar disableGutters>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "right",
								width: "1400px",
							}}
						>
							<img
								src={"/HSL-logo.png"}
								width="150"
								height="60"
								alt="Logo"
								className="logo"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									width: "220px",
								}}
							>
								<Button href="/" size="large" variant="contained">
									Trips
								</Button>

								<Button size="large" variant="contained" href="/stations">
									Stations
								</Button>
							</Box>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Navbar;
