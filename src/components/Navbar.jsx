import DownloadSVG from './DownloadSVG';
import NavbarItem from './NavbarItem';

export default function Navbar() {
    return (
        <div className="w-screen h-24 border-b border-slate-50 flex items-center justify-between gap-5 px-10">
            <div className="w-48 h-full flex items-center justify-center">
                <img src="/logo/1.png" className="h-full w-auto" alt="" />
            </div>
            <div className="w-auto flex items-center h-full justify-center gap-8">
                <NavbarItem title="Home" link="/" />
                <NavbarItem title="Projects" link="/projects" />
                <NavbarItem title="Social" link="/socials" />
                <NavbarItem title="Shop" link="/shop" />
                <NavbarItem title="About" link="/about" />
                <NavbarItem title="Contact Me" link="/contact" />
            </div>
            <div className="w-48 flex items-center justify-center">
                <button className="w-auto h-auto px-5 py-3 flex gap-2 items-center justify-center bg-primary rounded-xl text-background">
                    <DownloadSVG />
                    Download CV
                </button>
            </div>
        </div>
    );
}
