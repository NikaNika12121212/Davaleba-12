import React from 'react'

const BgPattern = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <defs>
        <pattern id="pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.15)" />
          <circle cx="60" cy="60" r="3" fill="rgba(255,255,255,0.15)" />
          <circle cx="60" cy="20" r="3" fill="rgba(255,255,255,0.1)" />
          <circle cx="20" cy="60" r="3" fill="rgba(255,255,255,0.1)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  )
}

export default BgPattern
