import * as React from 'react'

const Arrow = (props) => (
  <svg
    width={52}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.544.136a1.785 1.785 0 0 0-.967.968 1.785 1.785 0 0 0 .388 1.949l7.665 7.662H1.785a1.785 1.785 0 0 0 0 3.57H45.63l-7.665 7.663a1.787 1.787 0 1 0 2.528 2.528l10.712-10.711a1.786 1.786 0 0 0 0-2.529L40.493.525a1.786 1.786 0 0 0-1.949-.389Z"
      fill="#000"
    />
  </svg>
)

export default Arrow
