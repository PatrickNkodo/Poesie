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

		// Check if the document has already loaded
		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			// Add the event listener to handle the load event
			window.addEventListener('load', handleLoad);
		}

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