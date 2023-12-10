import { FavoriteCard } from './index';

const FavoritesContainer = ({ favorites, unit }) => {
	return (
		<div className='fav-container'>
			{favorites?.map((f) => (
				<FavoriteCard key={f.locationData.id} data={f} unit={unit} />
			))}
		</div>
	);
};

export default FavoritesContainer;
