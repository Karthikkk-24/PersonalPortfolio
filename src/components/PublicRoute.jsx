import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const PublicRoute = () => {


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start">
                <div className="w-96 h-full flex flex-col items-start justify-start p-6">
                    <Sidebar />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;