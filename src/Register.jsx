import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setname] = useState('');
    const [Mobileno, setMobileno] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>Liv.</h1>
            <h3>Register</h3>

        <form className="register-form" onSubmit={handleSubmit}>
            
            <input value={name} name="Name" id="Name" onChange={(e) => setname(e.target.value)}type="name"placeholder="Full Name" />
            
            <input value={Mobileno} name="Mobileno" id="Name" onChange={(e) => setMobileno(e.target.value)}type="Mobileno" placeholder="Mobile no." />

            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email ID" id="Email ID" name="Email ID" />

            <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Password" id="Password" name="Password" />

            <button type="submit">Sign up</button>

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}