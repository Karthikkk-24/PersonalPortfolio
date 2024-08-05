import NavItem from './NavItem';

export default function Sidebar() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-center p-10 gap-4 bg-background rounded-2xl">
            <NavItem title="Home" path={'/'} active />
            <NavItem title="Projects" path={'/projects'} />
            <NavItem title="Blogs" path={'/blogs'} />
            <NavItem title="Shop" path={'/shop'} />
            <NavItem title="About" path={'/about'} />
            <NavItem title="Contact" path={'/contact'} />
        </div>
    );
}
