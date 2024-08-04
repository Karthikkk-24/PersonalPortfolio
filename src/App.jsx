import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import PublicRoute from './components/PublicRoute';

function App() {
    return (
        <div className="bg-black w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Homepage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
