import { MdDownload } from 'react-icons/md';
import CallToAction from '../components/CallToAction';
import ProfessionalSummary from '../components/ProfessionalSummary';
import RecentBlogs from '../components/RecentBlogs';
import WhatIDo from '../components/WhatIDo';

export default function Homepage() {

    const handleDownload = () => {
        try {
            const pdfUrl = '/resume/Karthik_Shettigar_Resume.pdf';
            
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Karthik_Shettigar_Resume.pdf';
            document.body.appendChild(link);
            
            link.click();
            
            document.body.removeChild(link);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6 overflow-y-auto">
            <ProfessionalSummary />
            <button className='w-auto h-10 bg-primary font-semibold text-background px-5 py-2 rounded-lg hover:scale-105 transition-all flex items-center justify-center gap-2' onClick={handleDownload}>
                Download Resume <MdDownload />
            </button>
            <WhatIDo />
            <RecentBlogs />
        </div>
    );
}
