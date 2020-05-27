import React, { useEffect } from 'react';
import { addTwo } from '@foo-baz-bar/package-a';
import Button from './Button';

const Calculator = () => {
  useEffect(() => {
    console.log('@foo-baz-bar/package-b');
    const sumFromA = addTwo(2, 3);
    console.log('------');
    console.log(sumFromA);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => console.log('clicked'),
    label: "Button"
  }));
};

export default Calculator;