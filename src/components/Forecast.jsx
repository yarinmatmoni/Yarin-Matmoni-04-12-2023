import { useEffect, useState } from 'react';
import { weatherService } from '../services/weather.service';
import FavoriteEmpty from '../assets/svg/favorite-empty-svg.svg';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { addToFavorite, removeFromFavorite } from '../store/actions/weather.action';
import { CardContainer } from './index';

const Forecast = ({ locationData, currentWeather, isEexistInFavorites }) => {
	const [weatherIcon, setWeatherIcon] = useState(null);

	useEffect(() => {
		isEexistInFavorites(locationData?.id);
	}, []);

	useEffect(() => {
		handleOnDynamicIcon();
	}, [currentWeather.icon]);

	const handleOnDynamicIcon = async () => {
		setWeatherIcon(await weatherService.loadDynamicImage(currentWeather?.icon));
	};

	const handleOnClick = () => {
		if (!isEexistInFavorites(locationData.id)) addToFavorite({ locationData });
		else removeFromFavorite(locationData.id);
	};

	return (
		currentWeather &&
		locationData &&
		weatherIcon && (
			<>
				<div className='forecast'>
					<div className='forecast-current'>
						{weatherIcon && <img src={weatherIcon} alt='Forecast icon' />}
						<div className='forecast-description'>
							<div className='city'>{locationData.city}</div>
							<div className='forecast-title'>{currentWeather.text}</div>
							<div className='temp'>{currentWeather.temp}</div>
						</div>
						<img
							src={isEexistInFavorites(locationData.id) ? FavoriteFull : FavoriteEmpty}
							alt='Favorite'
							onClick={() => handleOnClick()}
							className='favorite-icon'
						/>
					</div>
					<CardContainer />
				</div>
			</>
		)
	);
};

export default Forecast;
