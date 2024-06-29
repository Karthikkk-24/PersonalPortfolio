import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" Component={Main} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
