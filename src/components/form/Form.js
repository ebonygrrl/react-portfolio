import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Contact.css';
import { validateName, validateEmail, validateMessage } from '../../utils/helpers';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const [addClass, setClass] = useState({});
  const [confirm, setConfirm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validate form entries
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (fullName && email && message) {

      // alert user their message has been sent, clear the inputs
      setConfirm(`Thank you, ${fullName}! Your message has been sent.`);

      setFullName('');
      setEmail('');
      setMessage('');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      setFullName(value);
      if (validateName(fullName)) {
        setClass({ ...addClass, fullName: false });
      }
    }

    if (name === 'email') {
      setEmail(value);
      if (validateEmail(email)) {
        setClass({ ...addClass, email: false });
      }
    }

    if (name === 'message') {
      setMessage(value);
      if (validateMessage(message)) {
        setClass({ ...addClass, message: false });
      }
    }
  };

  const handleInputBlur = (e) => {

    const { name } = e.target;

    if (name === 'fullName' && !fullName) {
      setError({ ...error, fullName: 'Please fill in your full name.' });
      setClass({ ...addClass, fullName: true });
    }

    if (name === 'email' && !email) {
      setError({ ...error, email: 'Please enter a valid email.' });
      setClass({ ...addClass, email: true });
    }

    if (name === 'message' && message === '') {
      setError({ ...error, message: 'Please leave a message.' });
      setClass({ ...addClass, message: true });
    }

    if (name === 'message' && message !== '' && !validateMessage(message)) {
      setError({ ...error, message: 'You gotta give me more than that!' });
      setClass({ ...addClass, message: true });
    }
  };

  const handleReset = (e) => {
    setFullName('');
    setEmail('');
    setMessage('');
    setConfirm('');
  };

  return (
    <>
      <Form noValidate onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type='text'
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Full Name"
            required
          />
          <Form.Control.Feedback type="invalid" className={addClass.fullName ? 'show' : 'hide'}>{error.fullName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid" className={addClass.email ? 'show' : 'hide'}>{error.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextarea">
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            value={message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Leave a comment here."
            required
          />
          <Form.Control.Feedback type="invalid" className={addClass.message ? 'show' : 'hide'}>{error.message}</Form.Control.Feedback>
        </Form.Group>

        <div className="text-center mt-3">
          <Button className="formBtn" type="submit">Submit</Button> <Button className="formBtn" type="reset" onClick={handleReset}>Reset</Button>
        </div>
      </Form>

      <div className="text-center mt-3">{confirm}</div>
    </>
  );
}

export default Contact;