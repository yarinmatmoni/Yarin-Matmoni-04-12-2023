import { useSelector } from 'react-redux';
import Favorite from '../assets/svg/favorite-svg.svg';
import { CardContainer } from './index';

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
						<div className='city'>{locationData.city}</div>
						<div className='forecast-title'>{currentWeather.text}</div>
						<div className='temp'>{currentWeather.temp}</div>
					</div>
					<img src={Favorite} alt='Favorite' className='favorite-icon' />
				</div>
			</div>
			<CardContainer />
		</>
	) : (
		<div>Loading...</div>
	);
};

export default Forecast;
