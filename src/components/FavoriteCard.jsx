import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { removeFromFavorite } from '../store/actions/weather.action';

const FavoriteCard = ({ data }) => {
	return (
		<div className='fav-card'>
			<div className='fav-card-details'>
				<div className='fav-card-title'>{data.locationData.city}</div>
				<div>current weather</div>
			</div>
			<img src={FavoriteFull} alt='Favorite Icon' onClick={() => removeFromFavorite(data.locationData.id)} />
		</div>
	);
};

export default FavoriteCard;
