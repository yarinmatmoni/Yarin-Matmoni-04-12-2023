import { useSelector } from 'react-redux';
import { WeatherCard } from './index';

const CardContainer = ({ unit }) => {
	const futureWeather = useSelector((storeState) => storeState.futureWeather);
	console.log(futureWeather);
	return (
		<div className='card-container'>
			{futureWeather?.map((day) => (
				<WeatherCard key={day.date} data={day} unit={unit} />
			))}
		</div>
	);
};

export default CardContainer;
