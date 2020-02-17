import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux-saga/action-creators/authAction';
import LoginComponent from '../components/login/Login';

const Login = ({login}) => {
  const [values, setValues] = useState({username: '', password: ''});

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    login(values);
    setValues({username: '', password: ''});
  };

  const {username, password} = values;
  return (
    <LoginComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      username={username}
      password={password}
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginUser(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
