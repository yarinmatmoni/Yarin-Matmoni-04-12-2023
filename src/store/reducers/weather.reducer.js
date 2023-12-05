export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_FUTURE_WEATHER = 'SET_FUTURE_WEATHER';

const initialState = {
	locationData: null,
	currentWeather: null,
	futureWeather: [],
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
		default:
			return state;
	}
};
