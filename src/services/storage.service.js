const FAVORITES = 'favorites';

const initLocalStorage = () => {
	const exist = localStorage.getItem(FAVORITES);
	if (!exist) localStorage.setItem(FAVORITES, JSON.stringify([]));
	else return JSON.parse(exist);
};

const save = (city) => {
	const favoritesList = JSON.parse(localStorage.getItem(FAVORITES));
	const isExists = favoritesList.some((favoriteCity) => favoriteCity.locationData.id === city.locationData.id);

	if (!isExists) {
		const newList = [...favoritesList, city];
		localStorage.setItem(FAVORITES, JSON.stringify(newList));
	} else console.log('City is already in favorites:', city);
};

export const storageService = { initLocalStorage, save };
