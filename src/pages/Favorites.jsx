import { useSelector } from 'react-redux';
import { FavoritesContainer } from '../components/index';

const Favorites = () => {
	const favorites = useSelector((storeState) => storeState.favorites);
	const unit = useSelector((storeState) => storeState.celsiusUnit);

	return (
		<div className='page-layout'>
			<h1>My favorites list</h1>
			{favorites?.length > 0 ? (
				<FavoritesContainer favorites={favorites} unit={unit} />
			) : (
				<div>Nothing to see here...</div>
			)}
		</div>
	);
};

export default Favorites;
