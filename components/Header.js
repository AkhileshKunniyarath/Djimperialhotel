'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Header.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Suites', href: '#suites' },
        { name: 'Restaurant', href: '#restaurant' },
        { name: 'Facilities', href: '#facilities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'glass' : ''}`}>
            <div className="container header-container">
                <a href="#home" className="logo">
                    <Image src="/images/logo-shield.jpg" alt="DJ Imperial Suites Logo" width={40} height={40} className="logo-img" />
                    <div className="logo-text">
                        <span className="logo-main">DJ IMPERIAL</span>
                        <span className="logo-sub">SUITES</span>
                    </div>
                </a>
                <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">✕</button>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <a href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item mobile-only-book">
                            <a href="#book" className="btn btn-book-mobile" onClick={() => setMenuOpen(false)}>Book Now</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="#book" className="btn btn-book desktop-only-book" onClick={() => setMenuOpen(false)}>Book Now</a>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}
