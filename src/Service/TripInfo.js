const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Get user info with id
 * @param {*} userId
 * @returns [null, data] if ok, else [error.message, []]
 */
export const getOnePageOfTrips = async (page) => {
	try {
		const response = await fetch(
			`https://localhost:7183/GetOnePage?page=${page}`,
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

export const getAllTrips = async () => {
	try {
		const response = await fetch(`https://localhost:7183/GetAllTrips`, {
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
