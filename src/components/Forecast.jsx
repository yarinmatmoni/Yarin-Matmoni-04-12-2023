import { useEffect, useState } from 'react';
import { weatherService } from '../services/weather.service';
import FavoriteEmpty from '../assets/svg/favorite-empty.svg';
import FavoriteFull from '../assets/svg/favorite-full.svg';
import { addToFavorite, removeFromFavorite } from '../store/actions/weather.action';
import { CardContainer } from './index';

const Forecast = ({ locationData, currentWeather, isEexistInFavorites, unit }) => {
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
		else removeFromFavorite(locationData);
	};

	if (!currentWeather || !locationData || !weatherIcon) {
		return;
	}

	return (
		<div className='forecast'>
			<div className='forecast-current'>
				{weatherIcon && <img src={weatherIcon} alt='Forecast icon' />}
				<div className='forecast-description'>
					<div className='city'>{locationData.city}</div>
					<div className='forecast-title'>{currentWeather.text}</div>
					<div className='temp' data-unit={unit}>
						{unit ? currentWeather.temp : weatherService.celsiusToFahrenheit(currentWeather.temp)}
					</div>
				</div>
				<img
					src={isEexistInFavorites(locationData.id) ? FavoriteFull : FavoriteEmpty}
					alt='Favorite'
					onClick={() => handleOnClick()}
					className='favorite-icon'
				/>
			</div>
			<CardContainer unit={unit} />
		</div>
	);
};

export default Forecast;
