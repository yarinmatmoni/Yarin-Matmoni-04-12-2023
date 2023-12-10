import {
	SET_LOCATION_DATA,
	SET_CURRENT_WEATHER,
	SET_FUTURE_WEATHER,
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	SET_UNIT,
	SET_COLOR_MODE,
} from '../reducers/weather.reducer';
import { weatherService } from '../../services/weather.service';
import { storageService } from '../../services/storage.service';
import { urlsService } from '../../services/urls.service';
import { store } from '../store';
import { toast } from 'react-toastify';

export const loadWeatherData = async (input) => {
	await loadLocationData(input);
	loadCurrentWeather();
	loadFutureWeather();
};

export const loadFavoriteData = (favData) => {
	const { id, city } = favData;

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

export const setUnit = () => {
	store.dispatch({ type: SET_UNIT });
};

export const setColorMode = () => {
	store.dispatch({ type: SET_COLOR_MODE });
};

// PRIVATE FUNCTIONS
const loadLocationData = async (input) => {
	try {
		const locationResponse = await fetch(urlsService.getLocationUrl(input));

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
		const currentWeatherResponse = await fetch(urlsService.getCurrentWeatherUrl(id));

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
		const futureWeatherResponse = await fetch(urlsService.getFutureWeatherUrl(id));

		if (futureWeatherResponse.status === 200) {
			const futureWeather = await futureWeatherResponse.json();

			const futureWeatherArray = futureWeather.DailyForecasts.map((weather) => ({
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
