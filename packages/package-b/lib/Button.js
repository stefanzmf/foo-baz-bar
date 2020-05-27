import React from 'react';

const Button = props => {
  console.log(props);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: props.onClick
  }, props.label));
};

export default Button;