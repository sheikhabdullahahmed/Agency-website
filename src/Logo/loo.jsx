import { Link } from 'react-router-dom';
// import logo from './../assets/logo2.png';
import logo from '../assets/home.png'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center space-x-2">
      {/* Logo Image */}
      <img src={logo} alt="logo" className="h-10 w-14 md:h-14 md:w-16" />

      {/* Text only visible on medium and larger screens (hidden on mobile) */}
      <h5 id="name" className="hidden md:block text-xl md:text-2xl font-bold">
        Prime Real Estate
      </h5>
    </Link>
  );
};

export default Logo;
