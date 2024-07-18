import { useState } from 'react';
import DownloadSVG from './DownloadSVG';
import NavbarItem from './NavbarItem';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (title) => {
        setActiveItem(title);
    };

    return (
        <div className="w-96 h-screen border-b border-slate-50 flex items-center justify-between gap-5 px-3">
            <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
                <div className="w-24 h-auto flex items-center justify-center">
                    <img src="/logo/1.png" className="h-auto w-full" alt="" />
                </div>
                <div className="w-full flex flex-col items-center h-auto justify-center gap-3">
                    <NavbarItem 
                        title="Home" 
                        active={activeItem === 'Home'} 
                        onClick={() => handleItemClick('Home')} 
                        link="/" 
                    />
                    <NavbarItem 
                        title="Projects" 
                        active={activeItem === 'Projects'} 
                        onClick={() => handleItemClick('Projects')} 
                        link="/projects" 
                    />
                    <NavbarItem 
                        title="Social" 
                        active={activeItem === 'Social'} 
                        onClick={() => handleItemClick('Social')} 
                        link="/socials" 
                    />
                    <NavbarItem 
                        title="Shop" 
                        active={activeItem === 'Shop'} 
                        onClick={() => handleItemClick('Shop')} 
                        link="/shop" 
                    />
                    <NavbarItem 
                        title="About" 
                        active={activeItem === 'About'} 
                        onClick={() => handleItemClick('About')} 
                        link="/about" 
                    />
                    <NavbarItem 
                        title="Contact Me" 
                        active={activeItem === 'Contact Me'} 
                        onClick={() => handleItemClick('Contact Me')} 
                        link="/contact" 
                    />
                </div>
                <div className="w-48 flex items-center justify-center">
                    <button className="w-auto h-auto px-5 py-3 flex gap-2 items-center justify-center bg-primary rounded-xl text-background">
                        <DownloadSVG />
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}
