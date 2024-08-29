import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PublicRoute = () => {
    const location = useLocation();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center max-md:h-auto">
            <div className="container h-full">
                <div className="w-full h-full flex items-start justify-start py-16 max-md:flex-col max-md:py-5 max-md:px-3">
                    <div className="w-96 h-full flex flex-col items-start justify-start p-2 max-md:w-full">
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
