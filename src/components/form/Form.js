import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Contact.css';

// import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});

  // validate form entries
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you, ${fullName}! Your message has been sent.`);
    setFullName('');
    setEmail('');
    setMessage('');


    // validate form entries
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleInputChange = (e) => {
    const {name, value } = e.target;

    if (name === 'fullName' && !fullName) {
      setError({ ...error, fullName: 'Please fill in your full name.'});
      setValidated(true);
      return;
    } else {
      setFullName(value);
      setValidated(false);
    }

    if (name === 'email' && !validateEmail(email)) {
      setError({ ...error, email: 'Please enter a valid email.' });
      setValidated(true);
      return;
    } else {
      setEmail(value);
      setValidated(false);
    }

    if (name === 'message' && message === '') {
      setError({ ...error, message: 'Please leave a message.'});
      setValidated(true);
      return;
    } else {
      setMessage(value);
      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control 
          type="text" 
          name="fullName" 
          defaultValue={fullName} 
          onChange={handleInputChange} 
          onBlur={handleInputChange} 
          placeholder="Full Name" 
          required 
        />
        <Form.Control.Feedback type="invalid">{error.fullName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
          type="email" 
          name="email" 
          defaultValue={email} 
          onChange={handleInputChange} 
          onBlur={handleInputChange} 
          placeholder="Enter email" 
          required 
        />
        <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
      <Form.Control 
        as="textarea"
        name="message"
        rows={3} 
        defaultValue={message} 
        onChange={handleInputChange} 
        onBlur={handleInputChange} 
        placeholder="Leave a comment here." 
        required 
      />
      <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>
      </Form.Group>

      <div className="text-center mt-3">
        <Button className='button' type="submit">Submit form</Button>
      </div>
    </Form>
  );
}

export default Contact;