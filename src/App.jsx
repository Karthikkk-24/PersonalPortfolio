import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PublicRoute from './components/PublicRoute';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Shop from './pages/Shop';

function App() {
    return (
        <div className="bg-black w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
