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

export const weatherService = { makeId, fahrenheitToCelsius, getDayOfWeekFromDate, isValidSearch };
