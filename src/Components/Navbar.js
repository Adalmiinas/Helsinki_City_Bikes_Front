import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Container } from "@mui/system";

const Navbar = () => {
	return (
		<div>
			<AppBar position="sticky" sx={{ bgcolor: "white" }}>
				<Container maxWidth="l">
					<Toolbar disableGutters>
						<div>
							<img
								src={"/HSL-logo.png"}
								width="150"
								height="60"
								alt="Logo"
								className="logo"
							/>
						</div>

						<div>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-around",
									alignItems: "",
								}}
							>
								<Box>
									<Button href="/" size="large" variant="contained">
										Trip
									</Button>
								</Box>
								<Box>
									<Button size="large" variant="contained" href="/stations">
										Station
									</Button>
								</Box>
							</Box>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Navbar;
