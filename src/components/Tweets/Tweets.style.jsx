import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrap = styled.button`
  background: #5cd3a8;
  margin-left: 92px;
  margin-right: 92px;
  margin-bottom: 36px;
  border-radius: 10px;
  padding: 14px 28px;
  border: none;
  color: var(--landing-button-text-color, #373737);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
`;
