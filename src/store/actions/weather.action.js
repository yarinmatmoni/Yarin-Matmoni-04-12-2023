import { SET_LOCATION_DATA, SET_CURRENT_WEATHER } from '../reducers/weather.reducer';
import { store } from '../store';

export const loadWeatherData = async (input) => {
	await loadLocationData(input);
	await loadCurrentWeather();
};

const loadLocationData = async (input) => {
	try {
		const locationResponse = await fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY&q=${input}`,
		);

		if (locationResponse.status === 200) {
			const location = await locationResponse.json();

			store.dispatch({
				type: SET_LOCATION_DATA,
				locationData: { id: location[0].Key, city: location[0].LocalizedName },
			});
		}
	} catch (error) {
		console.log('error:', error);
	}
};

const loadCurrentWeather = async () => {
	try {
		const id = store.getState().locationData.id;
		const currentWeatherResponse = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY`,
		);
		if (currentWeatherResponse.status === 200) {
			const currentWeather = await currentWeatherResponse.json();
			store.dispatch({
				type: SET_CURRENT_WEATHER,
				currentWeather: {
					temp: currentWeather[0].Temperature.Metric.Value,
					text: currentWeather[0].WeatherText,
					icon: currentWeather[0].WeatherIcon,
				},
			});
		}
	} catch (error) {
		console.log('error:', error);
	}
};
