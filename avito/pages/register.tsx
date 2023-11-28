import Link from 'next/link';



import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e :any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 500) {
        console.log('imad');
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex">
         <form onSubmit={handleSubmit} className="form-container">
         <p className="form-title">Register</p>
          <p className="form-message">Signup now and get full access to our app.</p>
          <div className="form-flex">
            <label className="form-label">
              <input
                  className="form-input"
                  type="text"
                  placeholder=""
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span>First Name</span>
              </label>
    
              <label className="form-label">
                <input
                  className="form-input"
                  type="text"
                  placeholder=""
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <span>Last Name</span>
              </label>
            </div>
    
            <label className="form-label">
              <input
                className="form-input"
                type="email"
                placeholder=""
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
            </label>
    
            <label className="form-label">
              <input
                className="form-input"
                type="password"
                placeholder=""
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span>Password</span>
            </label>
    
            <label className="form-label">
              <input
                className="form-input"
                type="password"
                placeholder=""
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span>Confirm Password</span>
            </label>
    
            <button className="form-submit" type="submit">
              Submit
            </button>
            <p className="form-signin">
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </form>
        </div>
  );
};

export default LoginForm;
