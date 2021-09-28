import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            zipCode
            phonenumber
            puppyAbout
            puppyAge
            puppyBreed
            puppyImage
        
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            zipCode
            phonenumber
            puppyAbout
            puppyAge
            puppyBreed
            puppyImage
        
        }
    }
`;

/* puppy {
        puppy_about
        puppy_age
        puppy_breed
        puppy_image
}   */

