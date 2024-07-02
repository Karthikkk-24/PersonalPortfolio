import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="w-screen h-24 border-b border-slate-50 flex items-center justify-center gap-5">
            <NavbarItem title="Home" link="/" />
            <NavbarItem title="Projects" link="/projects" />
            <NavbarItem title="Social" link="/socials" />
            <NavbarItem title="Shop" link="/shop" />
            <NavbarItem title="About" link="/about" />
            <NavbarItem title="Contact Me" link="/contact" />
        </div>
    );
}
