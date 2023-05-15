import ReactDOM from 'react-dom/client';
import PorfolioContextProvider from './store/AppContextProvider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <PorfolioContextProvider>
            <App />
        </PorfolioContextProvider>
    );
