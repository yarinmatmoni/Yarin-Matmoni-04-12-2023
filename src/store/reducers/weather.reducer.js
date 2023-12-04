export const SET_SEARCH = 'SET_SEARCH';

const initialState = {
	search: 'Tel Aviv',
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
		default:
			return state;
	}
};
