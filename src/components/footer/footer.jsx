const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-wrap justify-between mb-8">
                <div className="footer-section flex-1 m-2">
                    <h4 className="text-lg mb-4">Need Help</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Track Order</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Returns & Refunds</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">FAQ's</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
                    </ul>
                </div>
                <div className="footer-section flex-1 m-2">
                    <h4 className="text-lg mb-4">Company</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">euphoria Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">euphoristan</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Collaboration</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Media</a></li>
                    </ul>
                </div>
                <div className="footer-section flex-1 m-2">
                    <h4 className="text-lg mb-4">More Info</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="#" className="hover:underline">Term and Conditions</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Shipping Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-section flex-1 m-2">
                    <h4 className="text-lg mb-4">Location</h4>
                    <address className="not-italic">
                        <p className="mb-2">support@euphoria.in</p>
                        <p className="mb-2">Eklingpura Choraha, Ahmedabad Main Road</p>
                        <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    </address>
                </div>
                <div className="footer-section flex-1 m-2">
                    <h4 className="text-lg mb-4">Download The App</h4>
                    <div className="flex">
                        <a href="#" className="mr-2">
                            <img src="google-play.png" alt="Download on Google Play" className="w-32" />
                        </a>
                        <a href="#">
                            <img src="app-store.png" alt="Download on the App Store" className="w-32" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom flex justify-between items-center border-t border-gray-600 pt-4">
                <div className="social-icons">
                    <a href="#" className="text-white mr-4 hover:text-gray-400" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white mr-4 hover:text-gray-400" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white mr-4 hover:text-gray-400" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p className="m-0">&copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;