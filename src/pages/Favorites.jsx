import { useSelector } from 'react-redux';
import { FavoritesContainer } from '../components/index';

const Favorites = () => {
	const favorites = useSelector((storeState) => storeState.favorites);

	return (
		<div className='page-layout'>
			<h1>My favorites list</h1>
			{favorites.length > 0 ? <FavoritesContainer favorites={favorites} /> : <div>Nothing to see here...</div>}
		</div>
	);
};

export default Favorites;
