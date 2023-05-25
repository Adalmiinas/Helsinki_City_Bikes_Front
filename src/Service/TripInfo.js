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
