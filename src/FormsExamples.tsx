import React from 'react';
import { useState } from 'react';


function BasicInputHandling() {

  const [input, setInput] = useState('');

  return (
    <div className='parent-div'>
      <input
        className='basic-input'
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter Value"
      />


      <p className='basic-text'>Hello, {input || 'Stranger'}</p>
    </div>
  );


}



function MultipleInputsHandling() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='parent-div'>
      <input
        className='basic-input'
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter First Name"
      />

      <input
        className='basic-input'
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter Last Name"
      />

      <input
        className='basic-input'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />

      <br />

      <div>
        <strong className='basic-text'>Name : </strong> {formData.firstName} {formData.lastName}
        <br />
        <strong className='basic-text'>Email : </strong> {formData.email}

      </div>
    </div>
  );
}


function FormSubmissionExample() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    checked: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    checked: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.checked);

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {
      username: '',
      password: '',
      email: '',
      checked: '',
    };

    if(!formData.username){
      newErrors.username = 'Username is required';
    }

    if(!formData.password){
      newErrors.password = 'Password is required';
    }

    if(!formData.email){
      newErrors.email = 'Email is required';
    }

    if(!formData.checked){
      newErrors.checked = 'You must accept the terms and conditions';
    }

    return newErrors;
  }

  const handleSubmission = (e) => {
    e.preventDefault();

    console.log('Form Data Before Validation:', formData);
    const validationErrors = validate();

    const hasErrors = Object.values(validationErrors).some(error => error !== '');

    if(hasErrors){
      setErrors(validationErrors);
      console.log('Validation Errors:', validationErrors);
      
    }else{
      setErrors({
        username: '',
        password: '',
        email: '',
        checked: '',
      });

      setSubmitted(true);
      console.log('Form Data Submitted:', formData);
    }
  }


  if(submitted){
    return (
      <div>
        <div style={{ padding: '20px', background: '#d4edda', borderRadius: '8px' }}>
        <h3>✅ Registration Successful!</h3>
        <p>Welcome, {formData.username}!</p>
      </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='heading-text'>Registration Form</h1>

      <form onSubmit={handleSubmission}>
        <div style={{ marginBottom: '10px' }}>
        <input
        className="basic-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter Username"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      {errors.username && <p style={{ color: 'red' , fontSize: '14px' }}>{errors.username}</p>}
</div>

      <div style={{ marginBottom: '10px' }}>
      <input
        className="basic-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {errors.password && <p style={{ color: 'red' , fontSize: '14px' }}>{errors.password}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
      <input
        className="basic-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {errors.email && <p style={{ color: 'red' , fontSize: '14px' }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
      <label className="basic-text">
        <input
          type="checkbox"
          name="checked"
          checked={formData.checked}
          onChange={handleChange}
        />{' '}
        I accept the terms and conditions
      </label>
      {errors.checked && <p style={{ color: 'red' , fontSize: '14px' }}>{errors.checked}</p>}
      </div>

      <p>Status: {formData.checked ? '✅ Agreed' : '❌ Not agreed'}</p>



      <button className="basic-button" type="submit">Registration</button>
      </form>
    </div>
  );
}

function FormsHandling() {

  return (
    <div>
      <BasicInputHandling />
      <MultipleInputsHandling />
      <FormSubmissionExample />

    </div>
  );
}

export default FormsHandling;
