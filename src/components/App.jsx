import { Container } from './App.style';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Tweets } from './Tweets/Tweets';

export const App = () => {
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
