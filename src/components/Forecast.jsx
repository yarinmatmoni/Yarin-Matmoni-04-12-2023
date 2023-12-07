import FavoriteEmpty from '../assets/svg/favorite-empty-svg.svg';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { addToFavorite } from '../store/actions/weather.action';
import { CardContainer } from './index';

const Forecast = ({ locationData, currentWeather, isEexistInFavorites }) => {
	isEexistInFavorites(locationData.id);

	const handleOnClick = () => {
		addToFavorite({ locationData });
	};

	return (
		<div className='forecast'>
			<div className='forecast-current'>
				<img
					src={`https://developer.accuweather.com/sites/default/files/${currentWeather.icon}-s.png`}
					alt='Forecast icon'
				/>
				<div className='forecast-description'>
					<div className='city'>{locationData.city}</div>
					<div className='forecast-title'>{currentWeather.text}</div>
					<div className='temp'>{currentWeather.temp}</div>
				</div>
				<img
					src={isEexistInFavorites(locationData.id) ? FavoriteFull : FavoriteEmpty}
					alt='Favorite'
					onClick={handleOnClick}
					className='favorite-icon'
				/>
			</div>
			<CardContainer />
		</div>
	);
};

export default Forecast;
