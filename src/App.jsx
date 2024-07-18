import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import PublicRoute from './components/PublicRoute';

function App() {
    return (
        <div className="bg-background w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" Component={Main} />
                        <Route path="/projects" Component={Projects} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
