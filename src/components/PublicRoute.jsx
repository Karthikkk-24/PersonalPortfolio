import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PublicRoute = () => {
    const location = useLocation();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="container h-full">
                <div className="w-full h-full flex items-start justify-start py-16">
                    <div className="w-96 h-full flex flex-col items-start justify-start p-2">
                        <Sidebar />
                    </div>
                    <div className="w-full h-full flex flex-col items-start justify-start p-2">
                        <div className="w-full h-full flex flex-col items-center justify-start bg-background rounded-3xl p-10 border-[1px] border-slate-800 relative overflow-hidden">
                            <Navbar currentPath={location.pathname} />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
