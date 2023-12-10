import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Forecast } from '../components/index';
import { loadFavoriteData, loadWeatherData } from '../store/actions/weather.action';
import { useLocation } from 'react-router-dom';
import { userService } from '../services/user.service';

const Home = () => {
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { state } = useLocation();

	useEffect(() => {
		if (!state) {
			getCurrentLocation();
		} else loadFavoriteData(state);
	}, []);

	const locationData = useSelector((storeState) => storeState.locationData);
	const currentWeather = useSelector((storeState) => storeState.currentWeather);
	const favorites = useSelector((storeState) => storeState.favorites);
	const unit = useSelector((storeState) => storeState.celsiusUnit);

	const getCurrentLocation = async () => {
		const currentLatLan = await userService.getUserLatLan();
		const locationName = await userService.getLocationName(currentLatLan);
		loadWeatherData(locationName);
	};

	const isEexistInFavorites = (cityId) => {
		if (favorites?.length > 0) return favorites?.some((favorite) => favorite.locationData.id === cityId);
	};

	const onSearch = async () => {
		setIsLoading(true);
		await loadWeatherData(input);
		setIsLoading(false);
	};

	return (
		<div className='page-layout home'>
			<Search input={input} setInput={setInput} onSearch={onSearch} unit={unit} />
			{!isLoading && currentWeather ? (
				<Forecast
					unit={unit}
					locationData={locationData}
					currentWeather={currentWeather}
					isEexistInFavorites={isEexistInFavorites}
				/>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Home;
