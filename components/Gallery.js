import Image from 'next/image';
import './Gallery.css';

const galleryImages = [
    { src: '/images/gallery-exterior-new.jpg', alt: 'DJ Imperial Suites night exterior', span: 'large' },
    { src: '/images/gallery-bedroom-warm.jpg', alt: 'Luxury Suite Bedroom' },
    { src: '/images/gallery-bedroom-tv.jpg', alt: 'Suite with TV Setup' },
    { src: '/images/gallery-bathroom-new.jpg', alt: 'Modern Luxury Bathroom' },
    { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Deluxe suite bedroom' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Food Book Restaurant exterior', span: 'large' },
];


export default function Gallery() {
    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <h2 className="section-title">Gallery</h2>
                <p className="section-subtitle">
                    A visual journey through DJ Imperial Suites — from luxurious interiors to the vibrant Food Book Restaurant.
                </p>
                <div className="gallery-grid">
                    {galleryImages.map((img, i) => (
                        <div key={i} className={`gallery-item ${img.span === 'large' ? 'gallery-item--large' : ''}`}>
                            <div className="gallery-img" style={{ backgroundImage: `url(${img.src})` }} title={img.alt}>
                                <div className="gallery-overlay">
                                    <span>{img.alt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
