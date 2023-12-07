const makeId = () => {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < 5; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

const isValidSearch = (input) => {
	if (input !== '') {
		const englishTemplate = /^[A-Za-z ]*$/;
		return englishTemplate.test(input);
	}
	return false;
};

const fahrenheitToCelsius = (f) => {
	const celsius = ((f - 32) * (5 / 9)).toFixed(1);
	return celsius;
};

const getDayOfWeekFromDate = (date) => {
	const dateObj = new Date(date);
	const options = { weekday: 'long' };
	const dayOfWeek = dateObj.toLocaleDateString('en-US', options);
	return dayOfWeek;
};

const getWeather = async (cityId) => {
	try {
		const currentWeatherResponse = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY`,
		);
		if (currentWeatherResponse.status === 200) {
			const currentWeather = await currentWeatherResponse.json();
			return { temp: currentWeather[0].Temperature.Metric.Value, text: currentWeather[0].WeatherText };
		}
	} catch (error) {
		console.log('error:', error);
	}
};

export const weatherService = { makeId, fahrenheitToCelsius, getDayOfWeekFromDate, isValidSearch, getWeather };
