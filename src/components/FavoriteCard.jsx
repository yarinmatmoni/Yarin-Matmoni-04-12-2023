import { useEffect, useState } from 'react';
import FavoriteFull from '../assets/svg/favorite-full-svg.svg';
import { removeFromFavorite } from '../store/actions/weather.action';

const FavoriteCard = ({ data }) => {
	const [weather, setWeather] = useState(null);

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

	return (
		weather && (
			<>
				<div className='fav-card'>
					<div className='fav-card-details'>
						<div className='fav-card-title'>{data.locationData.city}</div>
						<div className='fav-card-weather'>
							<div className='fav-card-desc'>{weather.text}</div>
							<div className='fav-card-temp'>{weather.temp}</div>
						</div>
					</div>
					<img src={FavoriteFull} alt='Favorite Icon' onClick={() => removeFromFavorite(data.locationData.id)} />
				</div>
			</>
		)
	);
};

export default FavoriteCard;
