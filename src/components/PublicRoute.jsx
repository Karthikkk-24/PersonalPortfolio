
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const PublicRoute = () => {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start">
                <div className="w-96 h-full flex flex-col items-start justify-start">
                    <Navbar />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
