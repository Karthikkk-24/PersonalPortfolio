import ProfessionalSummary from '../components/ProfessionalSummary';
import WhatIDo from '../components/WhatIDo';

export default function Homepage() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-6">
            <ProfessionalSummary />
            <WhatIDo />
        </div>
    );
}
