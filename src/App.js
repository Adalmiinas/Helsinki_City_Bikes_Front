import logo from "./logo.svg";
import "./App.css";
import TripsTable from "./Components/Trips";
import StationsTable from "./Components/Stations";

function App() {
	return (
		<div className="App">
			<div
				style={{
					display: "center",
					maxHeight: "700px",
					overflow: "auto",
					maxWidth: "80%",
				}}
			>
				<TripsTable />
			</div>
			<div
				style={{
					display: "center",
					maxHeight: "700px",
					overflow: "auto",
					maxWidth: "80%",
				}}
			>
				<StationsTable />
			</div>
		</div>
	);
}

export default App;
