import { MdDownload } from 'react-icons/md';
import CallToAction from '../components/CallToAction';
import CustomButton from '../components/CustomButton';
import ProfessionalSummary from '../components/ProfessionalSummary';
import WhatIDo from '../components/WhatIDo';

export default function Homepage() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6">
            <ProfessionalSummary />
            <CustomButton title="Download CV" icon={<MdDownload />} url="/download" />
            <WhatIDo />
            <CallToAction />
        </div>
    );
}
