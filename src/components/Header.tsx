import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-800">AfyaCare Clinic</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link to="/booking" className="text-gray-600 hover:text-blue-600">Booking</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <Link to="/booking" className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Now</Link>
      </div>
    </header>
  );
}