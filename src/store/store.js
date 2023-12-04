import { legacy_createStore as createStore } from 'redux';
import { weatherReducer } from './reducers/weather.reducer';

export const store = createStore(
	weatherReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
