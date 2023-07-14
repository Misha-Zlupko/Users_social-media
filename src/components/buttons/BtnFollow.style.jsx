import styled from 'styled-components';

export const ButtonFolow = styled.button`
  background: #5cd3a8;
  margin-left: 92px;
  margin-right: 92px;
  margin-bottom: 36px;
  border-radius: 10px;
  padding: 14px 28px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.p`
  color: var(--landing-button-text-color, #373737);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;
