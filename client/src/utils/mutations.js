import { gql } from '@apollo/client';

<<<<<<< HEAD
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
=======
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
>>>>>>> 1a1028b548c14fd1ba6bf626aaacbf43999e03d8
    login(email: $email, password: $password) {
      token
      user {
        _id
<<<<<<< HEAD
=======
        username
>>>>>>> 1a1028b548c14fd1ba6bf626aaacbf43999e03d8
      }
    }
  }
`;

<<<<<<< HEAD
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        zipcode
        quantity
        category {
          name
        }
      }
=======
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $zipcode: String!,
$phonenumber: String!, $puppyabout: String!, $puppyage: String, $puppybreed: String!) {
        addUser(username: $username, email: $email, password: $password, zipcode: $zipcode,
        phonenumber: $phonenumber, puppyabout: $puppyabout, puppyage: $puppyage, puppybreed: $puppybreed) {
        token
        user {
            _id
            username
        }
>>>>>>> 1a1028b548c14fd1ba6bf626aaacbf43999e03d8
    }
  }
`;

<<<<<<< HEAD
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
=======
// export const LIKED_PROFILE = gql`
//   mutation likeProfile() {
      
//   }
// `;

// export const UNLIKE_PROFILE = gql`
//   mutation unlikeProfile() {
      
//   }
// `;
>>>>>>> 1a1028b548c14fd1ba6bf626aaacbf43999e03d8
