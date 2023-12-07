import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Forecast } from '../components/index';
import { loadWeatherData } from '../store/actions/weather.action';

const Home = () => {
	const [input, setInput] = useState('Tel Aviv');

	useEffect(() => {
		loadWeatherData(input);
	}, []);

	const locationData = useSelector((storeState) => storeState.locationData);
	const currentWeather = useSelector((storeState) => storeState.currentWeather);
	const favorites = useSelector((storeState) => storeState.favorites);

	const isEexistInFavorites = (cityId) => {
		return favorites.some((favorite) => favorite.locationData.id === cityId);
	};

	return (
		<div className='page-layout home'>
			<Search input={input} setInput={setInput} />
			{currentWeather ? (
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
