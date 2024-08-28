import { Book, Briefcase } from 'lucide-react';
import PropTypes from 'prop-types';

const EducationItem = ({ school, period, description, grade }) => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{school}</h3>
        <p className="text-primary">
            {period}&emsp;<span className="text-gray-200">( {grade} )</span>
        </p>
        <p className="text-gray-400 mt-1">{description}</p>
    </div>
);

const ExperienceItem = ({ title, period, description }) => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-primary">{period}</p>
        <p className="text-gray-400 mt-1">{description}</p>
    </div>
);

export default function About() {
    return (
        <div className="w-full h-full overflow-y-auto text-white p-8">
            <div className="w-full mx-auto">
                <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <Briefcase className="mr-2" /> Experience
                    </h2>
                    <ExperienceItem
                        title="RudraTech IT Services"
                        period="Nov 2022 — Aug 2024"
                        description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
                    />
                    <ExperienceItem
                        title="NEXA Software"
                        period="Feb 2022 — Aug 2022"
                        description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
                    />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <Book className="mr-2" /> Education
                    </h2>
                    <EducationItem
                        school="Massachusetts Institute of Technology"
                        period="2022 — 2023"
                        grade="96%"
                        description="Cybersecurity"
                    />
                    <EducationItem
                        school="Bharat College Of Arts & Commerce"
                        period="2019 — 2022"
                        grade="9.533 CGPA"
                        description="Bachelors In Computer Science"
                    />
                    <EducationItem
                        school="SICES High School & Junior College"
                        period="2017 — 2019"
                        grade="60%"
                    />
                </div>
            </div>
        </div>
    );
}

EducationItem.propTypes = {
    school: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string,
    grade: PropTypes.string.isRequired,
};

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
