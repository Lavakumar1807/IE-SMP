import React from 'react';
import Button from '../ui/Button';
import './ChoiceList.css';

const ChoiceList = ({ choices, onSelect, disabled }) => {
  if (!choices || choices.length === 0) {
    return (
      <div className="no-choices">
        <p>The story has reached its conclusion.</p>
      </div>
    );
  }

  return (
    <div className="choice-list">
      {choices.map((choice, index) => (
        <Button 
          key={index}
          variant="choice"
          onClick={() => onSelect(choice.nextId)}
          disabled={disabled}
        >
          {choice.text}
        </Button>
      ))}
    </div>
  );
};

export default ChoiceList;