import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <img src="sandy.png"></img>
      </div>
    );
  }   
} 

export default Profile;
