import styled from 'styled-components'

const StyledMain = styled.div`
  font-size: 16px;
`

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  a {
    margin-right: 2rem;
    display: inline-block;
    position: relative;
    border-radius: 4px 4px 0 0;
  }

  a:last-child {
    margin-right: 0;
  }

  a:after {
    position: absolute;
    content: '';
    display: block;
    margin: auto;
    width: 0px;
    border-bottom: 2px solid #ffcc70;
    transition: width 0.3s ease, border-bottom 0.3s ease;
  }

  a:hover:after {
    width: 100%;
    border-bottom: 2px solid #4158d0;
  }

  li {
    padding: 10px;
    list-style-type: none;
    cursor: pointer;
    letter-spacing: 0.5px;
    font-weight: 300;
  }

  a.active {
    border-bottom: 2px solid #4158d0;
  }
`

export { StyledMain, StyledList }
