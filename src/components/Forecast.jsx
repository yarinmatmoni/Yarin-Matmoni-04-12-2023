import { useSelector } from 'react-redux';
import Favorite from '../assets/svg/favorite-svg.svg';

const Forecast = () => {
	const locationData = useSelector((storeState) => storeState.locationData);
	const currentWeather = useSelector((storeState) => storeState.currentWeather);

	return locationData && currentWeather ? (
		<>
			<div className='forecast'>
				<div className='forecast-current'>
					<img
						src={`https://developer.accuweather.com/sites/default/files/${currentWeather.icon}-s.png`}
						alt='Forecast icon'
					/>
					<div className='forecast-description'>
						<p>{locationData.city}</p>
						<p>{currentWeather.temp}</p>
					</div>
					<img src={Favorite} alt='Favorite' className='favorite-icon' />
				</div>
				<div className='forecast-title'>{currentWeather.text}</div>
				<div className='forecast-future'>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
					<div>Card</div>
				</div>
			</div>
		</>
	) : (
		<div>Loading...</div>
	);
};

export default Forecast;
