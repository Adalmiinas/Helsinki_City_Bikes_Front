import logo from "./logo.svg";
import "./App.css";
import TripsTable from "./Components/Trips";
import StationsTable from "./Components/Stations";

function App() {
	return (
		<div className="App">
			<div style={{ maxHeight: "50%", overflow: "auto", minWidth: "40%" }}>
				<TripsTable />
				<StationsTable />
			</div>
		</div>
	);
}

export default App;
