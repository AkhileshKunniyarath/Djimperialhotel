'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
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
                <Link href="#home" className="logo">
                    {/* Text-based logo for now, can be replaced with the image logo */}
                    <span className="logo-main">DJ IMPERIAL</span>
                    <span className="logo-sub">SUITES</span>
                </Link>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <Link href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header-actions">
                    <Link href="#contact" className="btn btn-book">Book Now</Link>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}
