import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  margin: 0;
  flex-wrap: wrap;
  gap: 100px;
`;

export const BtnLoadMore = styled.button`
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
