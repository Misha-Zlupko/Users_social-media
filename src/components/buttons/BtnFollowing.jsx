import { FollowingBtn, ButtonText } from './BtnFollowing.style';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateFollowers } from '../../redux/user/slice';

export const BtnFollowing = ({ user }) => {
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
      {isFollowed && (
        <FollowingBtn onClick={toggleFollow}>
          <ButtonText>Following</ButtonText>
        </FollowingBtn>
      )}
    </>
  );
};
