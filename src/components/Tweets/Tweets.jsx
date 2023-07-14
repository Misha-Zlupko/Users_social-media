import { Link } from 'react-router-dom';
import { LinkWrap } from './Tweets.style';

export const Tweets = () => {
  return (
    <LinkWrap>
      <Link to="/">Back</Link>
    </LinkWrap>
  );
};
