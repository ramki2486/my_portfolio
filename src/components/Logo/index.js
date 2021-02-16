import React from 'react'

import {
  StyledLogo,
  VerticalLine,
  TopInclinedLine,
  BottomInclinedLine,
  Rectangle,
} from '../../styled-components/Logo'

const Logo = () => {
  return (
    <StyledLogo>
      <VerticalLine />
      <Rectangle />
      <TopInclinedLine />
      <BottomInclinedLine />
      <div className="white-line"></div>
    </StyledLogo>
  )
}

export default Logo
