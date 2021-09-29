import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $zipcode: String!,
phonenumber: String!, puppyabout: $String!, puppyage: String, puppybreed: String!) {
        addUser(username: $username, email: $email, password: $password, zipcode: $zipcode,
        phonenumber: $phonenumber, puppyabout: $puppyabout, puppyage: $puppyage, puppybreed: $puppybreed) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const LIKED_PROFILE = gql`
  mutation likeProfile() {
      
  }
`;

export const UNLIKE_PROFILE = gql`
  mutation unlikeProfile() {
      
  }
`;