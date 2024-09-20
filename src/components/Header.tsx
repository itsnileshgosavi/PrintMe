import Button from "./Button";
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="bg-white shadow px-5 md:px-16 lg:px-28 fixed top-0 right-0 left-0 z-50 w-screen overflow-hidden">
            <div className="container mx-auto flex items-center justify-between p-2">       
                <div className="flex items-center">
                    {/* mobile menu */}
                <button className="md:hidden text-gray-600 hover:text-gray-800">
                    <svg className="w-6 h-6 " fill="#39b75d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"></path>
                    </svg>
                </button>
                {/* logo */}
                   <img className="w-10 h-14 mr-2" src={logo}/>
                    <a href="#">
                    <h1 className="lg:text-3xl md:text-xl hidden md:block font-bold text-green-600">PrintMe</h1>
                    </a>
                </div>
                {/* navigation links */}
                <nav className="hidden md:flex flex-wrap items-center justify-center space-x-7  md:text-sm ">
                    <a href="#" className="text-gray-600 font-semibold hover:text-green-500">Catalog</a>

                    <a href="#" className="text-gray-600 font-semibold hover:text-green-500">Pricing</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-green-500">Blog</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-green-500">Services</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-green-500">Need help?</a>

                </nav>
                {/* login and signup */}
                <div className=" space-x-2">
                    <Button variant="ghost" size="sm">Log in</Button>
                    <Button variant="primary" size="sm">Sign Up</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;