import { useSelector } from 'react-redux';
import { Card } from './index';

const CardContainer = () => {
	const futureWeather = useSelector((storeState) => storeState.futureWeather);

	return (
		<div className='card-container'>
			{futureWeather?.map((day) => (
				<Card key={day.id} data={day} />
			))}
		</div>
	);
};

export default CardContainer;
