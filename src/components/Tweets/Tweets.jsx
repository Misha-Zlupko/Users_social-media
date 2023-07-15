import { Link } from 'react-router-dom';
import { LinkWrap, StyledLink } from './Tweets.style';

export const Tweets = () => {
  return (
    <LinkWrap>
      <StyledLink to="/">Back</StyledLink>
    </LinkWrap>
  );
};
