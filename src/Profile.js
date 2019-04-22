import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <img src="shino.png" width="240" height="320"></img>
    );
  }   
} 

export default Profile;
