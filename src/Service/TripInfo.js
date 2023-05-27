/**
 * Get on page of trips, which is 10 trips at a time
 * @param {*} page number
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getOnePageOfTrips = async (page) => {
	try {
		const response = await fetch(
			`https://localhost:7183/Trip/onePage?page=${page}`,
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
 * Get all trips
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getAllTrips = async () => {
	try {
		const response = await fetch(`https://localhost:7183/Trip`, {
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
 * Get the amount of trips in the database
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getCountOfTrips = async () => {
	try {
		const response = await fetch(`https://localhost:7183/Trip/Count`, {
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
