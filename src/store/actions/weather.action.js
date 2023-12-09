import {
	SET_LOCATION_DATA,
	SET_CURRENT_WEATHER,
	SET_FUTURE_WEATHER,
	ADD_FAVORITE,
	REMOVE_FAVORITE,
} from '../reducers/weather.reducer';
import { weatherService } from '../../services/weather.service';
import { storageService } from '../../services/storage.service';
import { store } from '../store';
import { toast } from 'react-toastify';

export const loadWeatherData = async (input) => {
	await loadLocationData(input);
	loadCurrentWeather();
	loadFutureWeather();
};

export const loadFavoriteData = (data) => {
	const { id, city } = data;

	if (id) {
		loadLocationData(city);
		loadCurrentWeather(id);
		loadFutureWeather(id);
	}
};

export const addToFavorite = (city) => {
	storageService.save(city);
	store.dispatch({ type: ADD_FAVORITE, favorite: city });
};

export const removeFromFavorite = (cityData) => {
	storageService.remove(cityData.id);
	store.dispatch({ type: REMOVE_FAVORITE, id: cityData.id });
	toast.info(`${cityData.city} removed from favorites list`);
};

// PRIVATE FUNCTIONS
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
		toast.error('This location is not found');
	}
};

const loadCurrentWeather = async (cityId) => {
	try {
		const id = cityId ? cityId : store.getState().locationData.id;
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

const loadFutureWeather = async (cityId) => {
	try {
		const id = cityId ? cityId : store.getState().locationData.id;
		const futureWeatherResponse = await fetch(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY`,
		);

		if (futureWeatherResponse.status === 200) {
			const futureWeather = await futureWeatherResponse.json();

			const futureWeatherArray = futureWeather.DailyForecasts.map((weather) => ({
				id: weatherService.makeId(),
				date: weatherService.getDayOfWeekFromDate(weather.Date),
				minTemp: weatherService.fahrenheitToCelsius(weather.Temperature.Minimum.Value),
				maxTemp: weatherService.fahrenheitToCelsius(weather.Temperature.Maximum.Value),
			}));

			store.dispatch({
				type: SET_FUTURE_WEATHER,
				futureWeather: futureWeatherArray,
			});
		}
	} catch (error) {
		console.log('error:', error);
	}
};
