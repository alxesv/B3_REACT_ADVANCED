import React from 'react';
import './card.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    actions?: React.ReactNode[];
    width?: string;
    fontWeight?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, actions, width=20, fontWeight="lighter" }) => {
    return (
        <div className="card" style={{ width: `${width}rem` }}>
            {imageUrl && (
                <div className="card-image">
                    <img src={imageUrl} alt={title} />
                </div>
            )}
            <div className="card-content">
                <h2 className="card-title" style={{ fontWeight: fontWeight }}>
                  {title}</h2>
                <p className="card-description">{description}</p>
            </div>
            {actions && (
                <div className="card-actions">
                    {actions.map((action, index) => (
                        <div key={index} className="card-action">
                            {action}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
