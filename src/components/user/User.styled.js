import styled from 'styled-components';

export const Title = styled.p`
  color: rgb(31, 22, 17);
  text-shadow: 1px 1px 2px rgb(73, 73, 61);
  &:hover {
    transform: scale(1.02);
  }
`;

export const NativeText = styled.span`
  ${Title}:hover & {
    background-color: lemonchiffon;
  }
  color: ${({ isEndedBiz }) => (isEndedBiz ? 'violet' : 'rgb(113, 162, 193);')};
`;
