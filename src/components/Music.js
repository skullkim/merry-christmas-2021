import styled from 'styled-components';

const MusicBox = styled.audio`
  position: absolute;
  top: 30px;
  left: 100px;
`;

const Music = () => {
  return (
    <>
      <MusicBox controls loop>
        <source src='/mp3/lastChristmas.mp3' type='audio/mp3'/>
      </MusicBox>
    </>
  );
}

export default Music