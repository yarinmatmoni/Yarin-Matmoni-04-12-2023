const basePathLocation = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
const basePathCurrentWeather = 'https://dataservice.accuweather.com/currentconditions/v1/';
const baseFutureWeatherUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/`;

const apiKey = '?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY';

const getLocationUrl = (cityId) => {
	return `${basePathLocation}${apiKey}&q=${cityId}`;
};

const getCurrentWeatherUrl = (cityId) => {
	return `${basePathCurrentWeather}${cityId}${apiKey}`;
};

const getFutureWeatherUrl = (cityId) => {
	return `${baseFutureWeatherUrl}${cityId}${apiKey}`;
};

export const urlsService = { getLocationUrl, getCurrentWeatherUrl, getFutureWeatherUrl };
