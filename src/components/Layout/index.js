import React from 'react'
import PropTypes from 'prop-types'

import { StyledLayout } from '../../styled-components/Layout'
import Logo from '../Logo'
import Main from '../Main'

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Logo />
      <Main>{children}</Main>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
