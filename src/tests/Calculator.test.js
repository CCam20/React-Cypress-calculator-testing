import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });
  it('should add 1 to 4 and get 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorEquals = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('5');
  });
  it('should subtract 4 from 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const operatorEquals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
    
  })
  it('multiply 3 by 5 and get 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEquals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('15');
    
  })
  it('divide 21 by 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatorDivide = container.getByTestId('operator-divide');
    const operatorEquals = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
    
  })
  it('concatenate multiple number button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
    
  })
  it('chain multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEquals = container.getByTestId('operator-equals');
    const operatorAdd = container.getByTestId('operator-add');
    fireEvent.click(button2);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('21');    
  })
  it('clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const clear = container.getByTestId('clear')
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEquals = container.getByTestId('operator-equals');
    const operatorAdd = container.getByTestId('operator-add');
    fireEvent.click(button2);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorEquals);
    fireEvent.click(clear);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('21')
    
  })

})

// calculator.add() - add 1 to 4 and get 5
// calculator.subtract() subtract 4 from 7 and get 3
// calculator.multiply() - multiply 3 by 5 and get 15
// calculator.divide() - divide 21 by 7 and get 3
// calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation