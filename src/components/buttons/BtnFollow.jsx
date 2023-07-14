import { ButtonFolow, ButtonText } from './BtnFollow.style';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateFollowers } from '../../redux/user/slice';

export const ButtonFollow = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const currentUser = users.find(u => u.id === user.id);
  const isFollowed = currentUser && currentUser.follow;
  const toggleFollow = () => {
    dispatch(
      updateFollowers({ userId: user.id, increment: isFollowed ? -1 : 1 })
    );
  };

  return (
    <>
      {!isFollowed && (
        <ButtonFolow onClick={toggleFollow} type="button">
          <ButtonText>Follow</ButtonText>
        </ButtonFolow>
      )}
    </>
  );
};
