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

export const Button = styled.button`
  min-width: 80px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid;
  background-color: rgb(142, 190, 190);
  color: aquamarine;
`;
