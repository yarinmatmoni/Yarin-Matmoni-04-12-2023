import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Forecast } from '../components/index';
import { loadFavoriteData, loadWeatherData } from '../store/actions/weather.action';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const [input, setInput] = useState('Tel Aviv');
	const [isLoading, setIsLoading] = useState(false);
	const { state } = useLocation();

	useEffect(() => {
		if (!state) loadWeatherData(input);
		else {
			loadFavoriteData(state);
		}
	}, []);

	const locationData = useSelector((storeState) => storeState.locationData);
	const currentWeather = useSelector((storeState) => storeState.currentWeather);
	const favorites = useSelector((storeState) => storeState.favorites);

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
			<Search input={input} setInput={setInput} onSearch={onSearch} />
			{!isLoading && currentWeather ? (
				<Forecast
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
