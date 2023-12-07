import { useSelector } from 'react-redux';
import { FavoritesContainer } from '../components/index';
import { useEffect } from 'react';
import { initStorage } from '../store/actions/weather.action';

const Favorites = () => {
	useEffect(() => {
		initStorage();
	}, []);

	const favorites = useSelector((storeState) => storeState.favorites);

	return (
		<div className='page-layout'>
			<h1>My favorites list</h1>
			{favorites ? <FavoritesContainer favorites={favorites} /> : <div>Loading...</div>}
		</div>
	);
};

export default Favorites;
