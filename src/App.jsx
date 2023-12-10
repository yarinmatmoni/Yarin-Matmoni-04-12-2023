import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './components';
import { Home, Favorites } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';

const App = () => {
	const isLightMode = useSelector((storeState) => storeState.lightMode);

	return (
		<div className={isLightMode ? 'light-mode' : 'dark-mode'}>
			<Router>
				<ToastContainer />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
