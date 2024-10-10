import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';  

jest.useFakeTimers(); 

const TestSlide = ({ text }: { text: string }) => <div>{text}</div>;

describe('Carousel Component', () => {
  
  const slides = [
    <TestSlide key="1" text="Slide 1" />,
    <TestSlide key="2" text="Slide 2" />,
    <TestSlide key="3" text="Slide 3" />
  ];

  it('should render without crashing', () => {
    const { container } = render(<Carousel slides={slides} />);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('should display the correct number of slides', () => {
    render(<Carousel slides={slides} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should go to the next slide when clicking the next button', () => {
    render(<Carousel slides={slides} buttonPagination={true} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    const nextButton = screen.getByText('❯');
    fireEvent.click(nextButton);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should go to the previous slide when clicking the previous button', () => {
    render(<Carousel slides={slides} buttonPagination={true} />);
    const nextButton = screen.getByText('❯');
    fireEvent.click(nextButton);
    const prevButton = screen.getByText('❮');
    fireEvent.click(prevButton);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('should change slides on pagination dot click', () => {
    render(<Carousel slides={slides} />);
    const dots = screen.getAllByRole('button');
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    fireEvent.click(dots[1]);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should autoplay slides after interval', () => {
    render(<Carousel slides={slides} autoplay={true} interval={2000} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should allow dragging to switch slides', () => {
    render(<Carousel slides={slides} />);
    const carousel = screen.getByRole('region');
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    fireEvent.mouseDown(carousel, { clientX: 300 });
    fireEvent.mouseMove(carousel, { clientX: 100 });
    fireEvent.mouseUp(carousel);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should render arrows when buttonPagination is true', () => {
    render(<Carousel slides={slides} buttonPagination={true} />);
    expect(screen.getByText('❮')).toBeInTheDocument();
    expect(screen.getByText('❯')).toBeInTheDocument();
  });

  it('should not render arrows when buttonPagination is false', () => {
    render(<Carousel slides={slides} buttonPagination={false} />);
    expect(screen.queryByText('❮')).toBeNull();
    expect(screen.queryByText('❯')).toBeNull();
  });
});
