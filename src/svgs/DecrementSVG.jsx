import React from 'react';

const DecrementSVG = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill="currentColor"
      viewBox="0 0 10 2"
    >
      <path
        d="M0 1h16v2H0V1Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default DecrementSVG;
