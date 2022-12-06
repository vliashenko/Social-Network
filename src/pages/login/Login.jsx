import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>SKAN NET.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta porro mollitia eum suscipit. Ea, ipsam recusandae, dolorum odio totam non quas sit tempore voluptatem impedit saepe enim in voluptatibus!
                    </p>
                    <span>
                        Don't have an account?
                    </span>
                    <Link to='/register'>
                        <button>
                            Register
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="#">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;