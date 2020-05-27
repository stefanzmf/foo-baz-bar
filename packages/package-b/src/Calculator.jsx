import React, { useEffect } from 'react';
import { addTwo } from '@foo-baz-bar/package-a';

import Button from './Button';

const Calculator = () => {
  useEffect(() => {
    console.log('@foo-baz-bar/package-b');
    const sumFromA = addTwo(2, 3);

    console.log('------')

    console.log(sumFromA);
  }, []);

  return (
    <React.Fragment>
      <Button onClick={() => console.log('clicked')} label='Button' />
    </React.Fragment>
  );
};

export default Calculator;
