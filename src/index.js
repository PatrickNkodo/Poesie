import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context';
import App from './App';
import './index.css';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RootComponent() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setIsLoading(false);
		};

		window.addEventListener('load', handleLoad);

		return () => {
			window.removeEventListener('load', handleLoad);
		};
	}, []);

	return (
		<AppProvider>
			{isLoading ? <Loader /> : <App />}
		</AppProvider>
	);
}

root.render(<RootComponent />);