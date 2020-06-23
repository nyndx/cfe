import React from "react"

const LiWrapper = props => (
  <div className="flex items-center">
    <div>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        className="w-4 h-4 mr-2 text-indigo-400"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
    {props.children}
  </div>
)

export default LiWrapper
