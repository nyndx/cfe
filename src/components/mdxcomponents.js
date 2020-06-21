import React from "react"

const components = {
  h1: props => (
    <h1 className="mb-4 text-xl font-medium text-gray-700" {...props}></h1>
  ),
  h2: props => (
    <h2 className="mb-4 text-base font-medium text-gray-700" {...props}></h2>
  ),
  p: props => <p className="mb-3 text-gray-600" {...props}></p>,
  ul: props => (
    <ul className="mb-4 ml-8 space-y-2 text-gray-600 list-disc" {...props}></ul>
  ),
  li: props => <li {...props}></li>,
  a: props => <a className="text-blue-400 hover:pointer" {...props}></a>,
}

export default components
