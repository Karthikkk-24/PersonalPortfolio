import NameCard from '../components/NameCard';
import Navbar from '../components/Navbar';

export default function Homepage() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-background rounded-3xl p-10">
            <Navbar />
            <NameCard />
        </div>
    );
}
