import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
            <div className="left">
                    <h1>Register</h1>
                    <form action="#">
                        <input type="text" placeholder='Username' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Name' />
                        <input type="password" placeholder='Password' />
                        <button>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>SKAN NET.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta porro mollitia eum suscipit. Ea, ipsam recusandae, dolorum odio totam non quas sit tempore voluptatem impedit saepe enim in voluptatibus!
                    </p>
                    <span>
                        Do you have an account?
                    </span>
                    <Link to='/login'>
                        <button>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;