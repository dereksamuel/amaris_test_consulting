import * as React from 'react'

const Tweet = (props) => (
  <svg
    width={25}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.618 2.376c-.905.39-1.89.671-2.905.78a5.032 5.032 0 0 0 2.219-2.78 9.96 9.96 0 0 1-3.201 1.219A5.033 5.033 0 0 0 17.044 0 5.044 5.044 0 0 0 12 5.047c0 .39.047.781.124 1.157A14.337 14.337 0 0 1 1.722.924a5.01 5.01 0 0 0-.686 2.546c0 1.752.89 3.296 2.248 4.205a5.089 5.089 0 0 1-2.281-.642v.062a5.046 5.046 0 0 0 4.044 4.952 5.34 5.34 0 0 1-1.328.172c-.328 0-.64-.033-.953-.077.64 2 2.5 3.453 4.716 3.5a10.111 10.111 0 0 1-6.263 2.157c-.423 0-.814-.015-1.219-.062A14.286 14.286 0 0 0 7.749 20c9.278 0 14.355-7.686 14.355-14.358 0-.219 0-.438-.015-.657a10.865 10.865 0 0 0 2.53-2.61Z"
      fill="#272D4E"
    />
  </svg>
)

export default Tweet