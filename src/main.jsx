import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ProfileContextProvider from './context/ProfileContext.jsx';

createRoot(document.getElementById('root')).render(
    <ProfileContextProvider>
        <App />
    </ProfileContextProvider>
)
