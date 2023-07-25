import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/users/usersActions';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'; // Import the Profile component

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();

  const userLoginDetails = useSelector(state => state.userLogin);
  const { loading, userInfo, error } = userLoginDetails;

  const submitFormHandler = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    console.log(email, password);
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <Loading />}
          {error && <ErrorMessage error={error} />}
          {!userInfo ? ( // Render the login form if user is not logged in
            <>
              <h1 className='text-center'>Login</h1>
              <form onSubmit={submitFormHandler}>
                <fieldset>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email address</label>
                    <input
                      value={email}
                      onChange={e => setemail(e.target.value)}
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Password</label>
                    <input
                      value={password}
                      onChange={e => setpassword(e.target.value)}
                      type='password'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Password'
                    />
                  </div>
                  <button type='submit' className='btn btn-info m-auto'>
                    Login
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            <Profile /> // Render the Profile component if user is logged in
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
