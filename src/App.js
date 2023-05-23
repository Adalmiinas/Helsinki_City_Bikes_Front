import "./App.css";
import TripsPage from "./Views/TripsPage";
import StationsPage from "./Views/StationsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/trips" element={<TripsPage />} />
					<Route path="/" element={<StationsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
