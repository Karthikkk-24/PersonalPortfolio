import PropTypes from 'prop-types';
import NavItem from './NavItem';

export default function Navbar({ currentPath }) {
    const generatePathName = (currentPath) => {
        switch (currentPath) {
            case '/':
                return 'Home';
            case '/projects':
                return 'Projects';
            case '/blogs':
                return 'Blogs';
            case '/shop':
                return 'Shop';
            case '/about':
                return 'About';
            case '/contact':
                return 'Contact';
            default:
                return '';
        }
    };

    return (
        <div className="w-full h-24 flex">
            <div className="w-[40%] h-20 flex items-start justify-start gap-2 flex-col">
                <h2 className="text-3xl">
                    <span className="text-primary font-bold">
                        {generatePathName(currentPath)}
                    </span>
                </h2>
                <div className="w-1/3 h-1 bg-primary"></div>
            </div>
            <div className="w-[60%] h-20 flex items-center justify-evenly p-5 gap-4 bg-background border-[1px] border-slate-800 absolute top-0 right-0 rounded-bl-2xl">
                <NavItem title="Home" path={'/'} active={currentPath === '/'} />
                <NavItem
                    title="Projects"
                    path={'/projects'}
                    active={currentPath === '/projects'}
                />
                <NavItem
                    title="Blogs"
                    path={'/blogs'}
                    active={currentPath === '/blogs'}
                />
                <NavItem
                    title="Shop"
                    path={'/shop'}
                    active={currentPath === '/shop'}
                />
                <NavItem
                    title="About"
                    path={'/about'}
                    active={currentPath === '/about'}
                />
                <NavItem
                    title="Contact"
                    path={'/contact'}
                    active={currentPath === '/contact'}
                />
            </div>
        </div>
    );
}

Navbar.propTypes = {
    currentPath: PropTypes.string.isRequired,
};
