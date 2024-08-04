import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-10 gap-4 bg-background rounded-2xl">
        <Link to="/" className="w-full flex items-center justify-start text-white text-xl">Home</Link>
        <Link to="/" className="w-full flex items-center justify-start text-white text-xl">Projects</Link>
        <Link to="/" className="w-full flex items-center justify-start text-white text-xl">Shop</Link>
        <Link to="/" className="w-full flex items-center justify-start text-white text-xl">About</Link>
        <Link to="/" className="w-full flex items-center justify-start text-white text-xl">Contact</Link>
    </div>
  )
}
