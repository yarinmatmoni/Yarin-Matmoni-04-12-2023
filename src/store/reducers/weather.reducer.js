export const SET_SEARCH = 'SET_SEARCH';
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';

const initialState = {
	search: 'Tel Aviv',
	locationData: null,
	currentWeather: null,
	fiveDaysWeather: [],
};

export const weatherReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_SEARCH:
			return {
				...state,
				search: action.search,
			};
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
		default:
			return state;
	}
};
