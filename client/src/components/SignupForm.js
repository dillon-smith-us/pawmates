import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from '../utils/API';
// To Do: Import mutation after Apollo pkg is installed.
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    zipCode: "",
    phoneNumber: "",
    puppyAbout: "",
    puppyAge: "",
    puppyBreed: "",

  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      zipCode: "",
      phoneNumber: "",
      puppyAbout: "",
      puppyAge: "",
      puppyBreed: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
          <Form.Control
            type="zipCode"
            placeholder="Your Zip Code"
            name="zipCode"
            onChange={handleInputChange}
            value={userFormData.zipCode}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zip Code is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
          <Form.Control
            type="phoneNumber"
            placeholder="Your Phone Number"
            name="phoneNumber"
            onChange={handleInputChange}
            value={userFormData.phoneNumber}
            required
          />
          <Form.Control.Feedback type="invalid">
            Phone number is required!
          </Form.Control.Feedback>
        </Form.Group>

        {/* To Do: change to text area */}
        <Form.Group>
          <Form.Label htmlFor="phoneAbout">About your Puppy</Form.Label>
          <Form.Control
            type="puppyAbout"
            placeholder="About your puppy"
            name="puppyAbout"
            onChange={handleInputChange}
            value={userFormData.puppyAbout}
            required
          />
          <Form.Control.Feedback type="invalid">
            A short description of your puppy is required!
          </Form.Control.Feedback>
        </Form.Group>

        {/* To Do: Add Years/Months choices */}
        <Form.Group>
          <Form.Label htmlFor="puppyAge">Puppy's Age</Form.Label>
          <Form.Control
            type="puppyAge"
            placeholder="Your puppy's age"
            name="puppyAge"
            onChange={handleInputChange}
            value={userFormData.puppyAge}
            required
          />
          <Form.Control.Feedback type="invalid">
            Puppy's age is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="puppyBreed">Puppy's Breed</Form.Label>
          <Form.Control
            type="puppyBreed"
            placeholder="Your puppy's breed"
            name="puppyBreed"
            onChange={handleInputChange}
            value={userFormData.puppyBreed}
            required
          />
          <Form.Control.Feedback type="invalid">
            Puppy's breed is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password &&
              userFormData.zipCode &&
              userFormData.phoneNumber &&
              userFormData.puppyAbout &&
              userFormData.puppyAge &&
              userFormData.puppyBreed

            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        {/* {error && <div>Sign up failed</div>} */}
      </Form>
    </>
  );
};

export default SignupForm;
