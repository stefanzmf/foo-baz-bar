import React from 'react';

const Button = (props) => {

  console.log(props);

  return (
    <React.Fragment>
      <a href="#" onClick={props.onClick}>{props.label}</a>
    </React.Fragment>
  )
};

export default Button;
