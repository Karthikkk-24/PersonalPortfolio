import PropTypes from 'prop-types';
import NavItem from './NavItem';

export default function Navbar({ currentPath }) {
    return (
        <div className="w-full h-full flex flex-col items-start justify-center p-5 gap-4 bg-background rounded-2xl border-[1px] border-slate-800">
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
    );
}

Navbar.propTypes = {
    currentPath: PropTypes.string.isRequired,
};
