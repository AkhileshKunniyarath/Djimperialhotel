import Image from 'next/image';
import './Gallery.css';

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'DJ Imperial Suites night exterior', span: 'large' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'DJ Imperial Suites day exterior' },
    { src: 'https://images.unsplash.com/photo-1618773928120-16a4d087c8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Luxury suite room' },
    { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Deluxe suite bedroom' },
    { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Executive suite bedroom' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Marble bathroom' },
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
