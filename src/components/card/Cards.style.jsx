import styled from 'styled-components';

export const CardStyle = styled.div`
  border-radius: 20px;
  background-color: rgba(87, 54, 163, 1);
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 380px;
  max-height: 460px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const ImgLogo = styled.img`
  width: 76px;
  height: 22px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ImgFotoMes = styled.img`
  max-width: 308px;
  max-height: 168px;
  margin-left: 36px;
  margin-right: 36px;
  margin-bottom: 18px;
`;

export const WrapperMen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`;

export const MenLine = styled.div`
  /* position: relative; */
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const ImgMen = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export const TextTwits = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;

export const TextFollowers = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 26px;
`;
