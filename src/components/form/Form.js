import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // set variables for form fields using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // validate form entries
  const [validated, setValidated] = useState(false);  

  // input field changes
  const handleInputChange = (e) => {
    
    // get value and name of input triggered
    const { name, value } = e.target;

    if (name !== e.currentTarget) {
      if (fullName.length < 2) {
        setNameError('Please enter your full name.');
      }
      
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email.');
      } 

      if (!setMessage(e.currentTarget.value)) {
        setMessageError('Please enter a message.');
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //clear the inputs
    setFullName('');
    setEmail('');
    setMessage('');    
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
    } 
    
    // alert(`Thank you, ${fullName}! Your message has been sent.`);      

    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="fullName" value={fullName} onChange={handleInputChange} onBlur={handleInputChange} placeholder="Full Name" required />
        <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" value={email} onChange={handleInputChange} onBlur={handleInputChange} placeholder="Enter email" required />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Control className="mb-3" as="textarea" value={message} onChange={handleInputChange} onBlur={handleInputChange} placeholder="Leave a comment here." required />
      <Form.Control.Feedback type="invalid">{messageError}</Form.Control.Feedback>

      <div className="text-center mt-3">
        <button onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </Form>
  );
}

export default Contact;