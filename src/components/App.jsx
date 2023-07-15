import { Container } from './App.style';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Tweets } from './Tweets/Tweets';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/user/userOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </Container>
    </div>
  );
};
