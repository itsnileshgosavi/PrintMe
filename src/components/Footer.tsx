import { Facebook, Instagram, Twitter,  Youtube, Linkedin, Github, Dribbble, Twitch } from "lucide-react"
const Footer = () => {
    return (
        <footer className="bg-transparent pt-8 w-screen overflow-hidden">
            <div className="flex  flex-wrap justify-between items-center space-y-5 mb-8 px-2 md:px-28 overflow-hidden">
                <img src="https://printify.com/pfh/assets/logo-full.svg" alt="Logo" className="w-32 mr-4" />
                <div className="flex text-white">
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Facebook/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Instagram/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Twitter/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Linkedin/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Youtube/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Github/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Dribbble/>
                    </a>
                    <a href="#" className="mr-4 bg-green-500 rounded-full p-1">
                        <Twitch/>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 mb-8 px-10">
                <div className="flex flex-col">
                    <h6 className="text-lg mb-4 font-bold">Integrations</h6>
                    <a href="#">Shopify</a>
                    <a href="#">Etsy</a>
                    <a href="#">Ebay</a>
                </div>
                <div className="flex flex-col">
                <h6 className="text-lg mb-4 font-bold">Discover</h6>
                    <a href="#">Blog</a>
                    <a href="#">Guides</a>
                    <a href="#">Products</a>
                </div>
                <div className="flex flex-col ">
                <h6 className="text-lg mb-4 font-bold">Start Selling</h6>
                    <a href="#">T-Shirts</a>
                    <a href="#">Hoodies</a>
                    <a href="#">Mugs</a>
                </div>
                <div className="flex flex-col">
                <h6 className="text-lg mb-4 font-bold">Printify</h6>
                    <a href="#">Print on Demand</a>
                    <a href="#">Print Providers</a>
                    <a href="#">Experts Program</a>
                </div>
            </div>
            <div className="bg-gray-100 py-10">
            <div className="text-center space-x-8 text-xs text-gray-600 font-medium">
                <a href="#">Intellectual Property Policy</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Security</a>
                <a href="#">Terms of Service</a>
            </div>
            <div>
                <p className="text-center mt-8">© 2023 Printify. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;