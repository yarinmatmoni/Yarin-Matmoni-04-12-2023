import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { removeFromFavorite } from '../store/actions/weather.action';
import { weatherService } from '../services/weather.service';

const FavoriteCard = ({ data, unit }) => {
	const [weather, setWeather] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		getFavoriteWeather(data.locationData.id);
	}, []);

	const getFavoriteWeather = async (cityId) => {
		setWeather(await weatherService.getWeather(cityId));
	};

	const onSelectCard = (id, city) => {
		navigate('/', { state: { id, city } });
	};

	const onSetFavorite = (event, city) => {
		event.stopPropagation();
		removeFromFavorite(city);
	};

	return (
		weather && (
			<div className='fav-card' onClick={() => onSelectCard(data.locationData.id, data.locationData.city)}>
				<div className='fav-card-details'>
					<div className='fav-card-title'>{data.locationData.city}</div>
					<div className='fav-card-weather'>
						<div className='fav-card-desc'>{weather.text}</div>
						<div className='fav-card-temp' data-unit={unit}>
							{unit ? weather.temp : weatherService.celsiusToFahrenheit(weather.temp)}
						</div>
					</div>
				</div>
				<img src={FavoriteFull} alt='Favorite Icon' onClick={(event) => onSetFavorite(event, data.locationData)} />
			</div>
		)
	);
};

export default FavoriteCard;
