import { Link } from 'react-scroll';
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Footer: React.FC = () => {
    return ( <>
    <div className="w-screen min-h-6 bg-indigo-900 text-white text-xs flex items-center justify-center">
        <span> © 2024 · Hand Crafted by <a href='https://www.stratumlabs.ca/'> Stratum Labs</a> · All Rights Reserved </span>
    </div>
    <Link
                to="home" 
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer fixed bottom-8 right-4 bg-indigo-900 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                style={{ zIndex: 1000 }}
            >
                <IoArrowUpCircleSharp size="30" />
            </Link>
    </> );
};

export default Footer;
