import React from 'react';
import './loader.css';

type LoaderProps = {
  type: 'spinner' | 'progress'; // Choix entre le spinner ou la barre de progression
  progress?: number;            // Pourcentage de la barre de progression (entre 0 et 100)
  radius?: number;
  height?: number;           // Hauteur du loader
  width?: number;
  colorType?: 'primary' | 'secondary' | 'danger' | 'warning';
};


const Loader: React.FC<LoaderProps> = ({
  type, height = 2, radius = 10, width = 10, colorType = 'primary' }) => {
  if (type === 'progress') {
    return (
      <div className="container-progress">
        <div className="progress-bar">
          <div
            data-testid="progress-bar"
            className={`progress-animation ${colorType}`}
            style={{ height: `${height}rem`, width: `${width}%` }}>
          </div>
        </div>
      </div>
    );
  }

  // Loader de type spinner avec SVG et animation "spin"
  return (
    <div
      data-testid="spinner"
      className={`spinner ${colorType}`}
      style={{ height: `${radius}rem`, width: `${radius}rem` }}>
    </div>
  );
};

export default Loader;
