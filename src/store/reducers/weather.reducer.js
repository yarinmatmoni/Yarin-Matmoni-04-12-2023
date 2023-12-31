import { storageService } from '../../services/storage.service';

export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_FUTURE_WEATHER = 'SET_FUTURE_WEATHER';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_UNIT = 'SET_UNIT';
export const SET_COLOR_MODE = 'SET_COLOR_MODE';

const initialState = {
	locationData: null,
	currentWeather: null,
	futureWeather: [],
	favorites: storageService.initLocalStorage(),
	celsiusUnit: true,
	lightMode: true,
};

export const weatherReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_LOCATION_DATA:
			return {
				...state,
				locationData: action.locationData,
			};
		case SET_CURRENT_WEATHER:
			return {
				...state,
				currentWeather: action.currentWeather,
			};
		case SET_FUTURE_WEATHER:
			return {
				...state,
				futureWeather: action.futureWeather,
			};
		case ADD_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites, action.favorite],
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((favorite) => favorite.locationData.id !== action.id),
			};
		case SET_UNIT:
			return {
				...state,
				celsiusUnit: !state.celsiusUnit,
			};
		case SET_COLOR_MODE:
			return {
				...state,
				lightMode: !state.lightMode,
			};
		default:
			return state;
	}
};
