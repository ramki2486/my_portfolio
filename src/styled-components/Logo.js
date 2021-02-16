import styled from 'styled-components'

const StyledLogo = styled.div`
  display: flex;
  position: relative;

  .white-line {
    position: absolute;
    height: 25.3rem;
    width: 0.3rem;
    background-color: white;
    transform: rotate(40deg);
    left: 11.8rem;
    top: -3.1rem;
  }
`

const VerticalLine = styled.div`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 42rem;
  width: 3.4rem;
  border-radius: 50px;
  position: relative;
`

const TopInclinedLine = styled.div`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 30rem;
  width: 3.4rem;
  border-radius: 50px;
  transform: rotate(40deg);
  margin-left: 7.2rem;
  margin-top: -50px;
`

const BottomInclinedLine = styled.div`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  height: 30rem;
  width: 3.4rem;
  border-radius: 50px;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  -webkit-transform: rotate(137deg);
  -ms-transform: rotate(137deg);
  transform: rotate(137deg);
  margin-left: -3.8rem;
  margin-top: 15.4rem;
`

const Rectangle = styled.div`
  position: absolute;
  width: 17rem;
  height: 20rem;
  left: 3.4rem;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  border-radius: 50px 0px;

  &:before {
    content: '';
    background-color: white;
    width: 5rem;
    height: 27.6rem;
    position: absolute;
    bottom: 0;
    /* right: 0; */
    transform: rotate(40deg);
  }
  &:after {
    content: '';
    background-color: white;
    width: 12rem;
    height: 20rem;
    position: absolute;
    right: -62px;
    top: 94px;
    -webkit-transform: rotate(40deg);
    -ms-transform: w;
    transform: rotate(40deg);
  }
`

export {
  StyledLogo,
  VerticalLine,
  TopInclinedLine,
  BottomInclinedLine,
  Rectangle,
}
