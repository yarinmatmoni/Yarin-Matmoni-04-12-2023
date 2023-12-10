import { FavoriteCard } from './index';

const FavoritesContainer = ({ favorites, unit }) => {
	return (
		favorites && (
			<div className='fav-container'>
				{favorites?.map((fav) => (
					<FavoriteCard key={fav.locationData.id} data={fav} unit={unit} />
				))}
			</div>
		)
	);
};

export default FavoritesContainer;
