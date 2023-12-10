const getUserLocation = async () => {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					resolve({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					console.error('Error getting location:', error);
					reject(error);
				},
			);
		} else {
			console.error('Geolocation is not supported by your browser');
			reject(new Error('Geolocation is not supported by your browser'));
		}
	});
};

const getLocationName = async (location) => {
	try {
		const { latitude, longitude } = location;
		const locationString = `${latitude},${longitude}`;

		const response = await fetch(
			`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY&q=${locationString}`,
		);

		if (response.status === 200) {
			const body = await response.json();
			return {
				cityName: body.EnglishName,
				id: body.Key,
			};
		}
	} catch (error) {
		console.log('error:', error);
	}
};

export const userService = { getUserLocation, getLocationName };
