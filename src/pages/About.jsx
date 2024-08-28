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
        <p className="text-gray-400 mt-1">
            {description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </p>
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
                        description={[
                            'Delivered over 10 projects with 95% client satisfaction rate across diverse industries, demonstrating strong client communication skills.',
                            'Built Java and Node.js backend systems serving 10,000+ concurrent users, improving performance by 40%.',
                            'Reduced API response time by 60% through code optimization and caching strategies, showcasing problem-solving abilities.',
                            'Led 20+ code reviews, identifying and resolving 150+ potential issues pre-deployment, exhibiting leadership and attention to detail.',
                        ]}
                    />
                    <ExperienceItem
                        title="NEXA Software"
                        period="Feb 2022 — Aug 2022"
                        description={[
                            'Created Node.js backend for customer feedback, increasing user submissions by 35% in 3 months.',
                            'Redesigned 5 key user interfaces with React.js, improving task completion rates by 40%, demonstrating user-centric design thinking.',
                            'Contributed to 4 cross-team projects, all delivered within 5% of estimated timelines, showcasing adaptability and time management skills.',
                            'Implemented Git workflow, reducing merge conflicts by 70% and speeding up releases by 2 days on average, highlighting process improvement capabilities.',
                        ]}
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
    description: PropTypes.array.isRequired,
};
