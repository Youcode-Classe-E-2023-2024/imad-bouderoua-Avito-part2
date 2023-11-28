// Updated HTML with modified class names
import Link from 'next/link';
import { useState } from 'react';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e :any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('http://localhost:8000/api/login', {
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
      if(data.message === 'user not found'){
          console.log('la');
      }else{
        setCookie(data.message[0].email, true, 7);
        localStorage.setItem('owner',data.message[0].email);
          console.log('daz')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to set a cookie
function setCookie(name : string, value : boolean, days : number) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieString;
}



    return (
      
      <div className="flex "> 
      
      <form onSubmit={handleSubmit} className="form-container">
      <p className="form-title">Login</p>
      <p className="form-message">Welcome back! Login to access your account.</p>
    
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
    
      <button className="form-submit">Login</button>
    
      <p className="form-signin">
        Don't have an account? <Link href="./register">Sign up</Link>
      </p>
    </form>
    </div>
    
    );
  }
  