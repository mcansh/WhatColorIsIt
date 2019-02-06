import styled from 'styled-components';
import { invert } from 'polished';

const Wrapper = styled.div<{ color: string }>`
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${props => invert(props.color)};
  background: ${props => props.color};
  height: 100%;
  display: flex;
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
