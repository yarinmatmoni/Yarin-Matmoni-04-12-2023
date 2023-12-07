import { FavoriteCard } from './index';

const FavoritesContainer = ({ favorites }) => {
	return (
		<div className='fav-container'>
			{favorites?.map((f) => (
				<FavoriteCard key={f.locationData.id} data={f} />
			))}
		</div>
	);
};

export default FavoritesContainer;
