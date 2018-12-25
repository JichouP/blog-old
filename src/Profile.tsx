import React, { Component } from 'react';
import profileImg from './res/noimage.png';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 10rem;
  margin: 3rem 0rem;
  padding: 1rem;
  box-shadow: 0 2px 5px #ccc;
`;

const ProfileImg = styled.img`
  border-radius: 0.3rem;
  width: 100%;
`;

export default class Profile extends Component {
  render() {
    return (
      <ProfileContainer className="profile-container">
        <ProfileImg src={profileImg} alt="profile" className="profile-img" />
        <p>JichouP</p>
      </ProfileContainer>
    );
  }
}
