import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Profile extends Component {
  constructor(props){
    super(props);
  }

notification(){
  toast.notify('Sendi');
}

  render() {
    return (
      <div>
        <button class="button button2" onClick={this.notification}>Namaku adalah ... </button>
        <br></br><br></br>
        <img src="sandy.png"></img>
      </div>
    );
  }   
} 

export default Profile;
