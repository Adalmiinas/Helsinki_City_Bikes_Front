export const getAllStations = async () => {
	try {
		const response = await fetch(`https://localhost:7183/GetAllStations`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error("Could not complete request!");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

export const getStationById = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/GetStationById?id=${id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error("Could not complete request!");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

export const GetDeparturesFromStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/GetDeparturesFromStation?id=${id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error("Could not complete request!");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};

export const GetReturnsForStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/GetReturnsForStation?id=${id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error("Could not complete request!");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
};
