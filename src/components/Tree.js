import styled, {css, keyframes} from "styled-components";
import {bounce, swing, pulse, shake, tada, hinge, rotateIn, flash} from 'react-animations';

const TreeImg = styled.img`
  height: 500px;
  position: relative;
  top: 380px;
  left: 1150px;
  z-index: 2;
`;

const Wood = styled.img`
  width: 100px;
  position: relative;
  top: 450px;
  left: 870px;
  z-index: 1;
`;

const Ball = styled.img`
  width: 55px;
  position: relative;
  z-index: 3;
`;

const swingAnimation = keyframes`${swing}`;
const RedBall = styled(Ball)`
  top: 50px;
  left: 730px;
  
  &:hover {
    animation: 1s ${swingAnimation};
  }
`;

const pulseAnimation = keyframes`${pulse}`;
const GreenStarBall = styled(Ball)`
  top: 190px;
  left: 800px;
  
  &:hover {
    animation: 1s ${pulseAnimation};
  }
`;

const bounceAnimation = keyframes`${bounce}`;
const BlueStarBall = styled(Ball)`
  top: 160px;
  left: 660px;
  
  &:hover {
    animation: 1s ${bounceAnimation};
  }
`;

const shakeAnimation = keyframes`${shake}`;
const SnowManBall = styled(Ball)`
  top: 340px;
  left: 500px;
  
  &:hover {
    animation: 1s ${shakeAnimation};
  }
`;

const tadaAnimation = keyframes`${tada}`;
const PurpleSnowBall = styled(Ball)`
  top: 305px;
  left: 605px;
  
  &:hover {
    animation: 1s ${tadaAnimation};
  }
`;

const hingeAnimation = keyframes`${hinge}`;
const RedStripeBall = styled(Ball)`
  top: 130px;
  left: 620px;
  
  &:hover {
    animation: 1s ${hingeAnimation};
  }
`;

const rotateInAnimation = keyframes`${rotateIn}`;
const RotatePurpleBall = styled(Ball)`
  top: 200px;
  left: 360px;
  
  &:hover {
    animation: 1s ${rotateInAnimation};
  }
`;

const flashAnimation = keyframes`${flash}`;
const Star = styled.img`
  height: 60px;
  position: relative;
  left: 1380px;
  top: -90px;
  z-index: 3;
  
  &:hover {
    animation: 1s ${flashAnimation};
  }
`;

const DancingSanta = styled.img`
  height: 180px;
  position: relative;
  left: 290px;
`;

const Tree = () => {
  return (
    <>
      <Star src='/images/Star.svg' alt='red star'/>
      <TreeImg src='/images/tree.svg' alt='christmas tree'/>
      <Wood src='/images/wood.svg' alt='wood'/>
      <RedBall src='/images/redBall.svg' alt='red ball'/>
      <GreenStarBall src='/images/greenStarBall.svg' alt='green star ball'/>
      <BlueStarBall src='/images/blueStarBall.svg' alt='blue star ball'/>
      <SnowManBall src='/images/snowManBall.svg' alt='snow man ball'/>
      <PurpleSnowBall src='/images/purpleSnow.svg' alt='purple snow ball'/>
      <RedStripeBall src='/images/redStripeBall.svg' alt='red stripe ball'/>
      <RotatePurpleBall src='/images/rotatePurpleBall.svg' alt='rotate purple ball'/>
      <DancingSanta src='/images/santaDance.gif' alt='dancing santa'/>
    </>
  );
}

export default Tree;