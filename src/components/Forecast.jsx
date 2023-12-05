import { useSelector } from 'react-redux';
import Favorite from '../assets/svg/favorite-svg.svg';
import Icon from '../assets/svg/logo-svg.svg';

const Forecast = () => {
	const locationData = useSelector((storeState) => storeState.locationData);

	return (
		locationData && (
			<>
				<div className='forecast'>
					<div className='forecast-current'>
						<img src={Icon} alt='Forecast icon' />
						<div className='forecast-description'>
							<p>{locationData.city}</p>
							<p>Temp</p>
						</div>
						<img src={Favorite} alt='Favorite' className='favorite-icon' />
					</div>
					<div className='forecast-title'>Scattered clouds</div>
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
		)
	);
};

export default Forecast;
