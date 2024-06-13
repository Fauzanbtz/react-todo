import React from "react";

const Button = (props) => {
  const { children, customStyle} = props;
  return (
    <button className={`${customStyle} rounded-full px-20 py-2 text-lg font-medium bg-gray-50 m-5`}>
      {children}
      
    </button>
  );
};

export default Button;
