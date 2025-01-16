import React from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Die = ({ face, rolling }) => {
    return (
        <div>
            {/* FontAwesome ikonu ve dinamik className */}
            <FontAwesomeIcon 
                icon={['fas', `fa-dice-${face}`]} 
                className={`Die ${rolling ? 'Die-shaking' : ''}`} 
            />
        </div>
    );
};

export default Die;
