import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Favorites } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<Router>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</Router>
	);
};

export default App;
