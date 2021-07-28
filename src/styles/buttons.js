import styled from 'styled-components';
import colors from './colors';

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: ${colors.dark};
  padding: 12px 28px;
  border-radius: 28px;
  color: ${colors.light};
  font-family: 'Inter Medium';
  font-size: 0.825em;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`