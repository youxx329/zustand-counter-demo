import './App.css';
import counterStore from './stores/counterStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy, reset } =
    counterStore();
  const [selected, setSelected] = useState(''); // 어떤 버튼이 선택됐는지 저장

  return (
    <div className="text-center mt-5">
      <h1>counter: {count}</h1>

      <ButtonGroup className="custom-button-group mt-3">
        <ToggleButton
          id="checkbox-increase"
          type="checkbox"
          variant="outline-danger"
          name="counter"
          checked={selected === 'increase'}
          value="increase"
          onChange={() => {
            setSelected('increase');
            increase();
          }}
          className="custom-toggle"
        >
          increase
        </ToggleButton>

        <ToggleButton
          id="checkbox-increase10"
          type="checkbox"
          variant="outline-danger"
          name="counter"
          checked={selected === 'increase10'}
          value="increase10"
          onChange={() => {
            setSelected('increase10');
            increaseBy(10);
          }}
          className="custom-toggle"
        >
          10씩 증가
        </ToggleButton>

        <ToggleButton
          id="checkbox-decrease"
          type="checkbox"
          variant="outline-danger"
          name="counter"
          checked={selected === 'decrease'}
          value="decrease"
          onChange={() => {
            setSelected('decrease');
            decrease();
          }}
          className="custom-toggle"
        >
          decrease
        </ToggleButton>

        <ToggleButton
          id="checkbox-decrease10"
          type="checkbox"
          variant="outline-danger"
          name="counter"
          checked={selected === 'decrease10'}
          value="decrease10"
          onChange={() => {
            setSelected('decrease10');
            decreaseBy(10);
          }}
          className="custom-toggle"
        >
          10씩 감소
        </ToggleButton>

        <ToggleButton
          id="checkbox-reset"
          type="checkbox"
          variant="outline-danger"
          name="counter"
          checked={selected === 'reset'}
          value="reset"
          onChange={() => {
            setSelected('reset');
            reset();
          }}
          className="custom-toggle"
        >
          초기화
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}

export default App;
