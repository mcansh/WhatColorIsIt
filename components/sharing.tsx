import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { invert } from 'polished';
import HexColor from '~/types/hex-color';
import { NavigatorShare } from '~/types/extended-navigator';

const Button = styled.button.attrs({ type: 'button' })<HexColor>`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => invert(props.hexColor)};
  color: ${props => props.hexColor};
  border: none;
  border-radius: 4px;
  padding: 0.7rem 2rem;
  cursor: pointer;
  font-size: 1.6rem;

  @supports (bottom: max(0px)) {
    bottom: max(1.5rem, env(safe-area-inset-bottom));
  }
`;

const Sharing = ({ hexColor }: HexColor) => {
  const shareHexTime = async () => {
    if ('share' in window.navigator) {
      try {
        const windowNavigator = window.navigator as NavigatorShare;
        await windowNavigator.share({
          title: 'What Color Is It?',
          text: `The time is currently ${hexColor}!`,
          url: 'http://whatcolorisit.loganmcansh.com',
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      const encodedURL = `https://twitter.com/intent/tweet?text=${escape(
        `The time is currently ${hexColor}! - http://whatcolorisit.loganmcansh.com`
      )}`;

      Router.push(encodedURL);
    }
  };

  return (
    <Button hexColor={hexColor} onClick={shareHexTime}>
      Share!
    </Button>
  );
};

export default Sharing;
