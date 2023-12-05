import { useEffect } from 'react';
import { Search } from '../components/index';
import { useSelector } from 'react-redux';
import { loadWeather } from '../store/actions/weather.action';

const Home = () => {
	const inputSearch = useSelector((storeState) => storeState.search);

	useEffect(() => {
		loadWeather();
	}, [inputSearch]);

	return (
		<div className='page-layout'>
			<Search inputSearch={inputSearch} />
		</div>
	);
};

export default Home;
