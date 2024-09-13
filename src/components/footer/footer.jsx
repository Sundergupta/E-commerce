const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>Need Help</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">euphoria Blog</a></li>
                            <li><a href="#">euphoristan</a></li>
                            <li><a href="#">Collaboration</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>More Info</h4>
                        <ul>
                            <li><a href="#">Term and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Location</h4>
                        <p>support@euphoria.in</p>
                        <p>Eklingpura Choraha, Ahmedabad Main Road</p>
                        <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    </div>
                    <div className="footer-section">
                        <h4>Download The App</h4>
                        <div className="app-icons">
                            <a href="#"><img src="google-play.png" alt="Google Play" /></a>
                            <a href="#"><img src="app-store.png" alt="App Store" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <p>&copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
