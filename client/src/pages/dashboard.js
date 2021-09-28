import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import { REMOVE_PROFILE } from '../utils/mutations';
import Auth from '../utils/localStorage';

const LikedProfiles = () => {
    const { loading, data } = useQuery(GET_ME);
    const [removeProfile] = useMutation(REMOVE_PROFILE);

    if (loading) {
        return <h2>LOADING...</h2>
    }
    const userData = data?.me || {};
    if (!userData?.username) {
        return (
        <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up or log in!
        </h4>
        )
    }


  const handleDeleteProfile = async (profileId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }

    try {
        await removeProfile({
            variables: { profileId: profileId }
        });

        alert(`the profile is removed!`);
        // upon success, remove that profile id from localStorage
        removeProfileId(profileId);
    } catch (err) {
        console.error(err);
    }
  }


return (
    <>
    <Jumbotron fluid className='text-light bg-dark'>
        <Container>
            <h1>Viewing liked Pawmate Profiles!</h1>
        </Container>
    </Jumbotron>
    <Container>
        <h2>
            {userData.likedProfiles.length
            ? `Viewing ${userData.likedProfiles.length} saved ${userData.likedProfiles.length === 1 ? 'book' : 'books'}:`
            : 'You have no liked profiles!'} 
        </h2>
        <CardColumns>
            {userData.likedProfiles.map((profile) => {
                return (
                    <Card key={profile.profileId} border='dark'>
                        {profile.image ? <Card.Img src={profile.image} alt={`The profile picture for ${profile.name}`} variant='top' /> : null}
                        <Card.Body>
                            <Card.Title>{profile.name}</Card.Title>
                            <p classname='small'>Puppy name: {profile.name}</p>
                            <Card.Text>{profile.description}</Card.Text>
                            <Button classname='btn-block btn-danger' onClick={() => handleDeleteProfile(profile.Id)}></Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardColumns>
    </Container>
    </>
  );
}

export default LikedProfiles;

