import Logo from '../assets/svg/logo-svg.svg';

const Card = () => {
	return (
		<div className='card'>
			<img src={Logo} alt='Weather icon' />
			<div className='details'>
				<div className='day'>Day</div>
				<div className='temp'>Temp</div>
			</div>
		</div>
	);
};

export default Card;
