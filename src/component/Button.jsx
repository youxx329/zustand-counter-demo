import React from 'react';
import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function ToggleButtonExample() {
  // const [setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <div className="d-flex justify-content-center mt-4">
      <ButtonGroup className="custom-button-group">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-danger"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className={`custom-toggle ${
              radioValue === radio.value ? 'active-selected' : ''
            }`}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtonExample;
