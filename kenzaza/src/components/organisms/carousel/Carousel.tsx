import React, { useEffect, useState, useRef } from 'react';
import './carousel.css';

interface CarouselProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  buttonPagination?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoplay = false, interval = 3000, buttonPagination = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  useEffect(() => {
    if (autoplay) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoplay, interval]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartPos(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const translateValue = clientX - startPos;
    setCurrentTranslate(translateValue);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (currentTranslate < -100) {
      nextSlide();
    } else if (currentTranslate > 100) {
      prevSlide();
    }
    setCurrentTranslate(0);
  };

  return (
    <>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        role="region"
        aria-label="Image Carousel"
      >
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${currentTranslate}px))`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {slides.map((child, index) => (
            <div key={index} className={`carousel-item d-flex-center`}>
              {child}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {buttonPagination && (
          <>
            <button className="carousel-control-prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="carousel-control-next" onClick={nextSlide}>
              &#10095;
            </button>
          </>
        )}

      </div>
      {/* Pagination Dots */}
      <div className="carousel-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            role='dot'
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
