import { Card } from '../card/Cards';
import { BtnLoadMore, Container, WrapperCard, StyledLink } from './Home.style';
import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Home = () => {
  const users = useSelector(state => state.users.users);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = users.slice(0, endIndex);

  const loadMoreUsers = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <StyledLink to="/tweets">Tweets</StyledLink>
      <WrapperCard>
        {displayedUsers.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </WrapperCard>
      {users.length > endIndex && (
        <BtnLoadMore onClick={loadMoreUsers}>Load More</BtnLoadMore>
      )}
    </Container>
  );
};
