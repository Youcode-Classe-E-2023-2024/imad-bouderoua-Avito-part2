// Updated HTML with modified class names

export default function Login() {
    return (
      <form className="form-container">
        <p className="form-title">Register</p>
        <p className="form-message">Signup now and get full access to our app.</p>
        <div className="form-flex">
          <label className="form-label">
            <input className="form-input" type="text" placeholder="" required />
            <span>Firstname</span>
          </label>
  
          <label className="form-label">
            <input className="form-input" type="text" placeholder="" required />
            <span>Lastname</span>
          </label>
        </div>
  
        <label className="form-label">
          <input className="form-input" type="email" placeholder="" required />
          <span>Email</span>
        </label>
  
        <label className="form-label">
          <input className="form-input" type="password" placeholder="" required />
          <span>Password</span>
        </label>
  
        <label className="form-label">
          <input className="form-input" type="password" placeholder="" required />
          <span>Confirm password</span>
        </label>
  
        <button className="form-submit">Submit</button>
        <p className="form-signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    );
  }
  