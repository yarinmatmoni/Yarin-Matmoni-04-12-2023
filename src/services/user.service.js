import { urlsService } from './urls.service';

const getUserLatLan = async () => {
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

		const response = await fetch(urlsService.getGeoLocationUrl(locationString));

		if (response.status === 200) {
			const body = await response.json();
			return body.EnglishName;
		}
	} catch (error) {
		console.log('error:', error);
	}
};

export const userService = { getUserLatLan, getLocationName };
