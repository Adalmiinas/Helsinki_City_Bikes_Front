/**
 * Get all stations
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getAllStations = async () => {
	try {
		const response = await fetch(`https://localhost:7183/Station`, {
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

/**
 * get station by its id
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getStationById = async (id) => {
	try {
		const response = await fetch(`https://localhost:7183/Station/id?id=${id}`, {
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

/**
 * Get the amount of depatures from a station
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getDeparturesFromStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/Departures?id=${id}`,
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

/**
 * Get the amount of returns for the station
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getReturnsForStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/Returns?id=${id}`,
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

/**
 * Get the top 5 stations where people return when starting from here
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getTop5ReturnStationsForStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/Top5ReturnStations?id=${id}`,
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

/**
 * get top 5 stations where people have departed from when returning here
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getTop5DepartureStationsForStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/Top5DepartureStations?id=${id}`,
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

/**
 * Get the avarege distance when starting from this station
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getAverageDistanceStartingFromStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/GetAvgDistanceStartingFrom?id=${id}`,
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

/**
 * get the average distance when returning at this station
 * @param {*} id station id
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getAverageDistanceEndingForStation = async (id) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Station/GetAvgDistanceEndingTo?id=${id}`,
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
