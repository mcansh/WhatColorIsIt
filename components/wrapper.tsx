import styled from 'styled-components';
import { invert } from 'polished';
import HexColor from '~/types/hex-color';

const Wrapper = styled.div<HexColor>`
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${props => invert(props.hexColor)};
  background: ${props => props.hexColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 8rem;

    @media (min-width: 600px) {
      font-size: 12.8rem;
    }
  }
`;

export default Wrapper;
