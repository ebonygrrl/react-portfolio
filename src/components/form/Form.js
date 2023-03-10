import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Feedback from 'react-bootstrap/Feedback';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit} action="mailto:email@email.com">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Full Name" required />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Control className="mb-3" as="textarea" placeholder="Leave a comment here." required />

      <button onClick={handleFormSubmit}>
        Submit
      </button>
    </Form>
  );
}

export default Contact;