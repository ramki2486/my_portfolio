import React from 'react'
import { Link } from 'gatsby'

import { StyledMain, StyledList } from '../../styled-components/Main'

const List = [
  { id: 0, name: 'About', path: '/about' },
  { id: 0, name: 'Projects', path: '/projects' },
  { id: 0, name: 'Resume', path: '/resume' },
  { id: 0, name: 'LinkedIn', path: '/linkedin' },
  { id: 0, name: 'Contact', path: '/contact' },
]

const Main = () => {
  return (
    <StyledMain>
      <StyledList>
        {List.map(ele => (
          <Link to={ele.path} key={ele.id} activeClassName="active">
            <li>{ele.name}</li>
          </Link>
        ))}
      </StyledList>
    </StyledMain>
  )
}

export default Main
