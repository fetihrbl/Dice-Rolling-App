import React from 'react';
import RollDice from './components/RollDice';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function App() {
    return (
        <div>
            <h1>
                <FontAwesomeIcon icon="dice" /> {/* Dice ikonu */}
                Roll the Dice!
            </h1>
            <RollDice />
        </div>
    );
}

export default App;
