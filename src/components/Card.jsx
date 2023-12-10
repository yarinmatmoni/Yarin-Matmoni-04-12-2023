import { weatherService } from '../services/weather.service';
import MinTemp from '../assets/svg/minTemp-svg.svg';
import MaxTemp from '../assets/svg/maxTamp-svg.svg';

const Card = ({ data, unit }) => {
	return (
		<div className='card'>
			<div className='day'>{data.date}</div>
			<div className='temp' data-unit={unit}>
				<div className='temp-item'>
					<img src={MinTemp} alt='Min temp' />
					{unit ? data.minTemp : weatherService.celsiusToFahrenheit(data.minTemp)}
				</div>
				<div className='temp-item'>
					<img src={MaxTemp} alt='Max temp' />
					{unit ? data.maxTemp : weatherService.celsiusToFahrenheit(data.maxTemp)}
				</div>
			</div>
		</div>
	);
};

export default Card;
