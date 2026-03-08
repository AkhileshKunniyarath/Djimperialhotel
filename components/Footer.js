import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">

                <div className="footer-brand">
                    <Link href="#home" className="footer-logo">
                        <span className="logo-main">DJ IMPERIAL</span>
                        <span className="logo-sub">SUITES</span>
                    </Link>
                    <p className="footer-desc">
                        Premium luxury accommodation and exceptional dining experience in the heart of Sasthamangalam.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#suites">Suites</Link></li>
                        <li><Link href="#restaurant">Restaurant</Link></li>
                        <li><Link href="#facilities">Facilities</Link></li>
                        <li><Link href="#gallery">Gallery</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Sankar Rd, Sasthamangalam<br />Thiruvananthapuram, Kerala 695010</p>
                    <a href="tel:9995703313">9995 70 3313</a><br />
                    <a href="tel:9995803313">9995 80 3313</a><br />
                    <a href="mailto:djimperialsuites@gmail.com">djimperialsuites@gmail.com</a>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} DJ Imperial Suites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
