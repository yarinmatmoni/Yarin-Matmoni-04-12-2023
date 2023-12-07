import FavoriteFull from '../assets/svg/favorite-full-svg.svg';

const FavoriteCard = ({ data }) => {
	return (
		<div className='fav-card'>
			<div className='fav-card-details'>
				<div className='fav-card-title'>{data.locationData.city}</div>
				<div>current weather</div>
			</div>
			<img src={FavoriteFull} alt='Favorite Icon' />
		</div>
	);
};

export default FavoriteCard;
