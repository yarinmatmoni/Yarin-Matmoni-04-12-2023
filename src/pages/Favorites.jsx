import { useSelector } from 'react-redux';
import { FavoritesContainer } from '../components/index';

const Favorites = () => {
	const favorites = useSelector((storeState) => storeState.favorites);

	return (
		<div className='page-layout'>
			<h1>My favorites list</h1>
			<FavoritesContainer favorites={favorites} />
		</div>
	);
};

export default Favorites;
