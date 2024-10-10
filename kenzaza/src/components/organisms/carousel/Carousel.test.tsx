import React, { act } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';  

const TestSlide = ({ text }: { text: string }) => <div>{text}</div>;

describe('Carousel Component - Special Cases', () => {
  const slides = [
    <TestSlide key="1" text="Slide 1" />,
    <TestSlide key="2" text="Slide 2" />,
    <TestSlide key="3" text="Slide 3" />
  ];

  it('should go to the previous slide if dragging right (currentTranslate > 100)', () => {
    render(<Carousel slides={slides} />);
    const carousel = screen.getByRole('region');
    fireEvent.mouseDown(carousel, { clientX: 300 });
    fireEvent.mouseMove(carousel, { clientX: 450 });
    fireEvent.mouseUp(carousel);
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should go to the last slide if on the first slide and clicking the previous button', () => {
    render(<Carousel slides={slides} buttonPagination={true} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    const prevButton = screen.getByText('❮');
    fireEvent.click(prevButton);
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should handle touch events correctly for swipe gestures (e.touches[0].clientX)', () => {
    render(<Carousel slides={slides} />);
    const carousel = screen.getByRole('region');
    fireEvent.touchStart(carousel, { touches: [{ clientX: 200 }] });
    fireEvent.touchMove(carousel, { touches: [{ clientX: 50 }] });
    fireEvent.touchEnd(carousel);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should not change slides if not dragging (isDragging is false)', () => {
    render(<Carousel slides={slides} />);
    const carousel = screen.getByRole('region');
    fireEvent.mouseMove(carousel, { clientX: 100 });
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    fireEvent.mouseDown(carousel, { clientX: 300 });
    fireEvent.mouseMove(carousel, { clientX: 100 });
    fireEvent.mouseUp(carousel);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should go to the last slide when on the first slide and clicking previous', () => {
    render(<Carousel slides={slides} buttonPagination={true} />);
    const prevButton = screen.getByText('❮');
    fireEvent.click(prevButton);
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should go to the correct slide when pagination dots are clicked', () => {
    render(<Carousel slides={slides} />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);
    expect(screen.getByText('Slide 2')).toBeInTheDocument(); 

    fireEvent.click(dots[0]); 
    expect(screen.getByText('Slide 1')).toBeInTheDocument(); 
  });
  
  it('should set and clear interval when autoplay is enabled', () => {
    const { unmount } = render(<Carousel slides={slides} autoplay={true} interval={2000} />);
    act(() => {
      jest.advanceTimersByTime(2000); 
    });
    expect(screen.getByText('Slide 2')).toBeInTheDocument(); 
    unmount();
  });


  it('should change to the correct slide when pagination dot is clicked', () => {
    render(<Carousel slides={slides} />);
    const dots = screen.getAllByRole('dot'); 
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    fireEvent.click(dots[1]);
    expect(screen.getByText('Slide 2')).toBeInTheDocument(); 
  });
});
