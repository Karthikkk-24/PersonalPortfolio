import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const PublicRoute = () => {
    const location = useLocation();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="container h-full">
                <div className="w-full h-full flex items-start justify-start py-16">
                    <div className="w-96 h-full flex flex-col items-start justify-start p-6">
                        <Sidebar currentPath={location.pathname} />
                    </div>
                    <div className="w-full h-full flex flex-col items-start justify-start p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
