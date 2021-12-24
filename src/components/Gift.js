import {useState} from 'react';
import styled from 'styled-components';

const PurplePresent = styled.img`
  height: 90px;
  position: relative;
  top: 460px;
  right: 450px;
`;

const Santa = styled.img`
  height: 110px;
  position: relative;
  top: 420px;
  right: 730px;
`;

const BluePresent = styled.img`
  height: 90px;
  position: relative;
  top: 310px;
  right: 220px;
`;

const DancingLudolf = styled.img`
  height: 90px;
  position: relative;
  right: 390px;
  top: 250px;
`;

const GreenPresent = styled.img`
  height: 90px;
  position: relative;
  right: 250px;
  top: 450px;
`;

const XmasTree = styled.img`
  height: 90px;
  position: relative;
  right: 330px;
  top: 390px;
`;

const Gift = () => {
  const [showSanta, setShowSanta] = useState(false);
  const [showLudolfDance, setShowLudolfDance] = useState(false);
  const [showTree, setShowTree] = useState(false);

  const handleClick = ({target: {className}}) => {
    if (className.includes('santaHandShake')) {
      setShowSanta(true);
      setTimeout(() => setShowSanta(false), 2000);
    } else if (className.includes('dancingLudolf')) {
      setShowLudolfDance(true);
      setTimeout(() => setShowLudolfDance(false), 2000);
    } else if (className.includes('xmasTree')) {
      setShowTree(true);
      setTimeout(() => setShowTree(false), 2000);
    }

  }

  return(
    <>
      <PurplePresent
        src='/images/purplePresent.svg'
        alt='purple present'
        className={'santaHandShake'}
        onClick={handleClick}
      />
      <BluePresent
        src='/images/bluePresent.svg'
        alt='blue present'
        className='dancingLudolf'
        onClick={handleClick}
      />
      <GreenPresent
        src='/images/greenPresent.svg'
        alt='green present'
        className='xmasTree'
        onClick={handleClick}
      />
      {showSanta ?
        <Santa src='/images/santaShakeHand.gif' alt='santa shake hand'/> : null
      }
      {showLudolfDance ?
        <DancingLudolf src='/images/dancingLudolf.gif' alt='dancing ludolf'/> : null
      }
      {
        showTree ?
          <XmasTree src='/images/christmasTree.gif' alt='christmas tree'/> : null
      }
    </>
  );
}

export default Gift;