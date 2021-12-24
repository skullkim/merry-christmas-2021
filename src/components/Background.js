import styled from 'styled-components';

const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${`${process.env.PUBLIC_URL}/images/background.jpeg`});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = ({children}) => {
  return (
    <BackgroundImage>
      {children}
    </BackgroundImage>
  )
}

export default Background;