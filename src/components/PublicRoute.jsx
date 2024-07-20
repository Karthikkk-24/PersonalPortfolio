import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const PublicRoute = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start gap-2">
                <div className="w-96 h-full flex flex-col items-start justify-start p-5">
                    <Navbar />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start p-5 pl-0">
                    <div className="bg-background w-full h-full rounded-2xl p-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
