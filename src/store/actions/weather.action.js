import { SET_SEARCH } from '../reducers/weather.reducer';
import { store } from '../store';

export const setInputSearch = (inputValue) => {
	store.dispatch({ type: SET_SEARCH, search: inputValue });
};
