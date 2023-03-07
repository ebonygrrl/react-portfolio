import React, { useState } from 'react';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you, ${fullName}! Your message has been sent.`);
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
      <form className="form" action="mailto:email@email.com">
        <input
          value={fullName}
          name="fullName"
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <textarea
          value={message}
          name="message"
          required
        ></textarea>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
  );
}

export default Form;