import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
    return (
        <div className='bg-background w-screen min-h-screen'>
            <Router>
                <Routes>
                    <Route path="/" Component={Main} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
