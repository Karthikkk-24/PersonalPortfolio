import { ChevronDown, ChevronUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMedium,
    FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SocialInfo from './SocialInfo';

const SocialDropdown = ({ isOpen, toggle }) => {
    const socialItems = [
        {
            icon: <FaGithub />,
            url: 'https://github.com/Karthikkk-24',
            title: 'GitHub',
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/kks24/',
            title: 'LinkedIn',
        },
        {
            icon: <FaXTwitter />,
            url: 'https://x.com/karthikkk24',
            title: 'Twitter',
        },
        {
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/the_coding_hacker/',
            title: 'Instagram',
        },
        {
            icon: <FaMedium />,
            url: 'https://medium.com/@karthikkk',
            title: 'Medium',
        },
        {
            icon: <FaYoutube />,
            url: 'https://www.youtube.com/@thecodinghacker',
            title: 'YouTube',
        },
        {
            icon: <FaEnvelope />,
            url: 'mailto:kkshettigar24@gmail.com',
            title: 'Mail',
        },
    ];

    return (
        <div className="w-full">
            <button
                onClick={toggle}
                className="w-full flex items-center justify-between bg-onyx text-white px-4 py-2 rounded-lg"
            >
                Social Links
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && (
                <div className="mt-2 bg-background border border-slate-800 rounded-lg p-2">
                    {socialItems.map((item, index) => (
                        <SocialInfo
                            key={index}
                            icon={item.icon}
                            url={item.url}
                            title={item.title}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-4 bg-background rounded-2xl border-[1px] border-slate-800">
            <div className="bg-onyx w-32 h-32 rounded-2xl flex items-center justify-center">
                <img src="/icon.png" className="h-full w-auto" alt="" />
            </div>
            <h1 className="text-white text-xl font-semibold uppercase">
                Karthik Shettigar
            </h1>
            <p className="bg-onyx rounded-lg px-4 py-2 text-slate-200">
                Software Engineer
            </p>
            <div className="w-[80%] h-[1px] bg-onyx my-4"></div>
            <div className="w-[90%] h-auto">
                <div className="hidden md:flex md:flex-col md:items-start md:justify-start md:gap-5">
                    <SocialInfo
                        icon={<FaGithub />}
                        url="https://github.com/Karthikkk-24"
                        title="GitHub"
                    />
                    <SocialInfo
                        icon={<FaLinkedin />}
                        url="https://www.linkedin.com/in/kks24/"
                        title="LinkedIn"
                    />
                    <SocialInfo
                        icon={<FaXTwitter />}
                        url="https://x.com/karthikkk24"
                        title="Twitter"
                    />
                    <SocialInfo
                        icon={<FaInstagram />}
                        url="https://www.instagram.com/the_coding_hacker/"
                        title="Instagram"
                    />
                    <SocialInfo
                        icon={<FaMedium />}
                        url="https://medium.com/@karthikkk"
                        title="Medium"
                    />
                    <SocialInfo
                        icon={<FaYoutube />}
                        url="https://www.youtube.com/@thecodinghacker"
                        title="YouTube"
                    />
                    <SocialInfo
                        icon={<FaEnvelope />}
                        url="mailto:kkshettigar24@gmail.com"
                        title="Mail"
                    />
                </div>
                <div className="md:hidden">
                    <SocialDropdown
                        isOpen={isDropdownOpen}
                        toggle={toggleDropdown}
                    />
                </div>
            </div>
        </div>
    );
}

SocialDropdown.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
