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

export const weatherService = { fahrenheitToCelsius, getDayOfWeekFromDate };
