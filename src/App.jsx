import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import PublicRoute from './components/PublicRoute';
import Shop from './components/Shop';
import Social from './components/Social';

function App() {
    return (
        <div className="bg-background w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" Component={Main} />
                        <Route path="/projects" Component={Projects} />
                        <Route path='/socials' Component={Social} />
                        <Route path='/contact' Component={Contact} />
                        <Route path='/about' Component={About} />
                        <Route path="/shop" Component={Shop} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
