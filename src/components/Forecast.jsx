import { useEffect } from 'react';
import FavoriteEmpty from '../assets/svg/favorite-empty-svg.svg';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { addToFavorite, removeFromFavorite } from '../store/actions/weather.action';
import { CardContainer } from './index';

const Forecast = ({ locationData, currentWeather, isEexistInFavorites }) => {
	useEffect(() => {
		isEexistInFavorites(locationData.id);
	}, []);

	const handleOnClick = () => {
		if (!isEexistInFavorites(locationData.id)) addToFavorite({ locationData });
		else removeFromFavorite(locationData.id);
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
