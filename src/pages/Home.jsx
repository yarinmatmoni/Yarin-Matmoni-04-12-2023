import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Forecast } from '../components/index';
import { loadWeatherData } from '../store/actions/weather.action';

const Home = () => {
	const [input, setInput] = useState('Tel Aviv');
	const locationData = useSelector((storeState) => storeState.locationData);
	const currentWeather = useSelector((storeState) => storeState.currentWeather);

	useEffect(() => {
		loadWeatherData(input);
	}, []);

	return (
		<div className='page-layout home'>
			<Search input={input} setInput={setInput} />
			{currentWeather ? (
				<Forecast locationData={locationData} currentWeather={currentWeather} />
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Home;
