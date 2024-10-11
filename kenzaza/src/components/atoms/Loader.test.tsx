import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';

test('renders spinner loader by default', () => {
  render(<Loader type="spinner" />);
  const spinner = screen.getByTestId('spinner');
  expect(spinner).toHaveClass('spinner');
  expect(spinner).toHaveStyle('height: 10rem');
  expect(spinner).toHaveStyle('width: 10rem');
  expect(spinner).toHaveClass('primary');
});

test('renders progress bar loader when type is progress', () => {
  render(<Loader type="progress" radius={10} width={50} height={2} colorType="secondary" />);
  const progressBar = screen.getByTestId('progress-bar');
  expect(progressBar).toHaveClass('progress-animation');
  expect(progressBar).toHaveStyle('width: 50%');
  expect(progressBar).toHaveStyle('height: 2rem');
  expect(progressBar).toHaveClass('secondary');
});
