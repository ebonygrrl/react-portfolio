import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Contact() {
  // set variables for form fields using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // validate form entries
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setFullName(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
    alert(`Thank you, ${fullName}! Your message has been sent.`);


    // validate form entries
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleFormChange = (e) => {
    e.preventDefault();

    if (!setFullName(e.target.value)) {
      setValidated(false);
    } 
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit} action="mailto:email@email.com">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" onChange={handleFormChange} placeholder="Full Name" required />
        <Form.Control.Feedback type="invalid">Please enter your full name.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
      </Form.Group>

      <Form.Control className="mb-3" as="textarea" placeholder="Leave a comment here." required />
        <Form.Control.Feedback type="invalid">Please leave a message.</Form.Control.Feedback>
      <div class="form-btn mt-3">
        <button onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </Form>
  );
}

export default Contact;