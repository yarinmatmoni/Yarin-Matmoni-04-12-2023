import { useEffect } from 'react';
import { Search, Forecast } from '../components/index';
import { useSelector } from 'react-redux';
import { loadWeather } from '../store/actions/weather.action';

const Home = () => {
	const inputSearch = useSelector((storeState) => storeState.search);

	useEffect(() => {
		loadWeather();
	}, [inputSearch]);

	return (
		<div className='page-layout home'>
			<Search inputSearch={inputSearch} />
			<Forecast />
		</div>
	);
};

export default Home;
