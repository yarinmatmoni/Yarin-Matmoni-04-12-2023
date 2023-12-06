import MinTemp from '../assets/svg/minTemp-svg.svg';
import MaxTemp from '../assets/svg/maxTamp-svg.svg';

const Card = ({ data }) => {
	return (
		<div className='card'>
			<div className='day'>{data.date}</div>
			<div className='temp'>
				<div className='temp-item'>
					<img src={MinTemp} alt='Min temp' />
					{data.minTemp}
				</div>
				<div className='temp-item'>
					<img src={MaxTemp} alt='Max temp' />
					{data.maxTemp}
				</div>
			</div>
		</div>
	);
};

export default Card;
