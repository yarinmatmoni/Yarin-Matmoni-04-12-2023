import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { removeFromFavorite } from '../store/actions/weather.action';

const FavoriteCard = ({ data }) => {
	const [weather, setWeather] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		getFavoriteWeather(data.locationData.id);
	}, []);

	const getFavoriteWeather = async (cityId) => {
		try {
			const currentWeatherResponse = await fetch(
				`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=XIfD99Ghh4wZGVWgqTkJsOiRCycLU1xY`,
			);
			if (currentWeatherResponse.status === 200) {
				const currentWeather = await currentWeatherResponse.json();
				setWeather({ temp: currentWeather[0].Temperature.Metric.Value, text: currentWeather[0].WeatherText });
			}
		} catch (error) {
			console.log('error:', error);
		}
	};

	const onSelectCard = (id, city) => {
		navigate('/', { state: { id, city } });
	};

	const onSetFavorite = (event, id) => {
		console.log(event);
		event.stopPropagation();
		removeFromFavorite(id);
	};

	return (
		weather && (
			<>
				<div className='fav-card' onClick={() => onSelectCard(data.locationData.id, data.locationData.city)}>
					<div className='fav-card-details'>
						<div className='fav-card-title'>{data.locationData.city}</div>
						<div className='fav-card-weather'>
							<div className='fav-card-desc'>{weather.text}</div>
							<div className='fav-card-temp'>{weather.temp}</div>
						</div>
					</div>
					<img src={FavoriteFull} alt='Favorite Icon' onClick={(event) => onSetFavorite(event, data.locationData.id)} />
				</div>
			</>
		)
	);
};

export default FavoriteCard;
