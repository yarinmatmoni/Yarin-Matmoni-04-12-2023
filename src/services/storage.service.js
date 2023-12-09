const FAVORITES = 'favorites';

const initLocalStorage = () => {
	const exist = localStorage.getItem(FAVORITES);
	debugger;
	console.log(exist);
	if (!exist) {
		localStorage.setItem(FAVORITES, JSON.stringify([]));
		return [];
	} else return JSON.parse(exist);
};

const save = (city) => {
	const favoritesList = JSON.parse(localStorage.getItem(FAVORITES));
	const isExists = favoritesList.some((favoriteCity) => favoriteCity.locationData.id === city.locationData.id);

	if (!isExists) {
		const newList = [...favoritesList, city];
		localStorage.setItem(FAVORITES, JSON.stringify(newList));
	} else console.log('City is already in favorites:', city);
};

const remove = (cityId) => {
	const favoritesList = JSON.parse(localStorage.getItem(FAVORITES));
	const isExists = favoritesList.some((favoriteCity) => favoriteCity.locationData.id === cityId);

	if (!isExists) console.log('City is not in favorites list:', cityId);
	else {
		const newList = favoritesList.filter((favorite) => favorite.locationData.id !== cityId);
		localStorage.setItem(FAVORITES, JSON.stringify(newList));
	}
};

export const storageService = { initLocalStorage, save, remove };
