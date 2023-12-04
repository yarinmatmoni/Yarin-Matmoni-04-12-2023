import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>,
	// </React.StrictMode>,
);
