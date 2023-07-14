import { BtnFollowing } from 'components/buttons/BtnFollowing';
import { ButtonFollow } from 'components/buttons/BtnFollow';
import fotoMes from '../../foto/pictureCard.png';
import {
  CardStyle,
  ImgLogo,
  ImgFotoMes,
  MenLine,
  WrapperMen,
  ImgMen,
  TextTwits,
  TextFollowers,
} from './Cards.style';
import React from 'react';
import Logo from '../../foto/LogoUser.png';

export const Card = ({ user }) => {
  console.log(user.avatar);
  const formattedFollowers = user.followers.toLocaleString('en', {
    useGrouping: true,
  });

  return (
    <CardStyle>
      <ImgLogo src={Logo} alt="Message" />
      <ImgFotoMes src={fotoMes} alt="Message" />
      <WrapperMen>
        <MenLine></MenLine>
        <ImgMen src={user.avatar} alt="Men" />
      </WrapperMen>
      <TextTwits>{user.tweets} tweets</TextTwits>
      <TextFollowers>{formattedFollowers} followers</TextFollowers>
      <BtnFollowing user={user} />
      <ButtonFollow user={user} />
    </CardStyle>
  );
};
