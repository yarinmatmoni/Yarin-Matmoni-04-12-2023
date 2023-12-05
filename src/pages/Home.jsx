import { useEffect, useState } from 'react';
import { Search, Forecast } from '../components/index';
import { loadWeatherData } from '../store/actions/weather.action';

const Home = () => {
	const [input, setInput] = useState('Tel Aviv');

	useEffect(() => {
		loadWeatherData(input);
	}, []);

	return (
		<div className='page-layout home'>
			<Search input={input} setInput={setInput} />
			<Forecast />
		</div>
	);
};

export default Home;
