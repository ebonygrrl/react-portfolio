import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Contact.css';
import { validateName, validateEmail } from '../../utils/helpers';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const [addClass, setClass] = useState({});

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
    const { name, value } = e.target;

    if (name === 'email' && validateEmail(email)) {
      setEmail(value);
      setClass({ ...addClass, email: '' });
      return;
    }

    if (name === 'fullName' && validateName(fullName)) {
      setFullName(value);
      setClass({ ...addClass, fullName: '' });
      return;
    }

    if (name === 'message') {
      setMessage(value);
      setClass({ ...addClass, message: '' });
      return;
    }
  };

  const handleInputBlur = (e) => {

    const { name } = e.target;

    if (name === 'fullName' && !fullName) {
      setError({ ...error, fullName: 'Please fill in your full name.' });
      setClass({ ...addClass, fullName: 'show' });
    }

    if (name === 'email' && !email) {
      setError({ ...error, email: 'Please enter a valid email.' });
      setClass({ ...addClass, email: 'show' });
    }

    if (name === 'message' && message === '') {
      setError({ ...error, message: 'Please leave a message.' });
      setClass({ ...addClass, message: 'show' });
    }
  };

  const handleReset = (e) => {    
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type='text'
          name="fullName"
          defaultValue={fullName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Full Name"
          required
        />
        <Form.Control.Feedback type="invalid" className={addClass.fullName}>{error.fullName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          defaultValue={email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Enter email"
          required
        />
        <Form.Control.Feedback type="invalid" className={addClass.email}>{error.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          defaultValue={message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Leave a comment here."
          required
        />
        <Form.Control.Feedback type="invalid" className={addClass.message}>{error.message}</Form.Control.Feedback>
      </Form.Group>

      <div className="text-center mt-3">
        <Button className="formBtn" type="submit">Submit</Button> <Button className="formBtn" type="reset" onClick={handleReset}>Reset</Button>
      </div>
    </Form>
  );
}

export default Contact;