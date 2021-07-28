import styled from 'styled-components';
import colors from './colors';

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: ${colors.shark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 20px 28px;
  color: ${colors.light};
  font-family: 'Inter Light';
  font-weight: 300;
  font-size: 1.125em;
  text-transform: uppercase;
`

export const SmallButton = styled.a`
  display: inline-block;
  background: ${colors.nepal};
  border-radius: 24px;
  padding: 12px 18px;
  font-family: 'Inter Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.tuna};
`;