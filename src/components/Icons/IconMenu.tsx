import * as React from 'react'

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}>
      <path
        fill="hsl(212, 19%, 15%)"
        d="M384 64h640v128H384V64zm0 384h640v128H384V448zm0 384h640v128H384V832zM0 128a128 128 0 11256 0 128 128 0 01-256 0zm0 384a128 128 0 11256 0 128 128 0 01-256 0zm0 384a128 128 0 11256 0 128 128 0 01-256 0z"
      />
    </svg>
  )
}

export default Menu
