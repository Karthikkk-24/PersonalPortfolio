import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLogoLinkedin } from 'react-icons/io';
import SocialInfo from './SocialInfo';

export default function Sidebar() {
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
            <div className="w-[90%] h-auto flex flex-col items-start justify-start gap-5">
                <SocialInfo icon={<FaGithub />} url="https://github.com/Karthikkk-24" title="GitHub" />
                <SocialInfo icon={<FaLinkedin />} url="https://www.linkedin.com/in/kks24/" title="LinkedIn" />
                <SocialInfo icon={<FaXTwitter />} url="https://x.com/karthikkk24" title="Twitter" />
                <SocialInfo icon={<FaInstagram />} url="https://www.instagram.com/the_coding_hacker/" title="Instagram" />
                <SocialInfo icon={<FaMedium />} url="https://medium.com/@karthikkk" title="Medium" />
                <SocialInfo icon={<FaYoutube />} url="https://www.youtube.com/@thecodinghacker" title="YouTube" />
                <SocialInfo icon={<FaEnvelope />} url="mailto:kkshettigar24@gmail.com" title="Mail" />
            </div>
        </div>
    );
}
