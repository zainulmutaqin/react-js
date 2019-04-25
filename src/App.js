import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Calculator from './Calculator.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'Tuan Kreb',
      color: 'Merah',
      img: 'merah.png', 
      nilai1 : null,
      nilai2: null,
      operator: null,
      hasil: null,
    };
  }

/*
  menusaya(){
    return <img src={this.state.active+".jpg"} width="500"></img>
  }
*/
/*
  menusaya(){
    var gambar;
    if(this.state.active.toLowerCase() === 'merah'){
      gambar="merah"; //sesuai nama file gambar
    }else if(this.state.active.toLowerCase() === 'kuning'){
      gambar="biru";
    }else if(this.state.active.toLowerCase() === 'hijau'){
      gambar="hijau";
    }else if(this.state.active.toLowerCase() === 'kuning'){
      gambar="biru";
    }

    return <img src={this.state.active+".jpg"} width="500"></img>
  }
*/


  clicked (menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
    });
  }

  info(name){
    if(name === "Calculator"){
      //display calculator
      return <Calculator/>  
    }
    else if(name == 'Profile'){
      //display menu profile
      return <Profile nama="Sendi"/> //nama memnaggil isi di class Profile.js

    }
    else{
      //display default
      return(
      <div>
      I'am <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
          <br></br>
          <img src={this.state.img} width="240" ></img>
    </div>);
    }
  }

  render() {
    return (
      <div className="App">
      {/*map akan loop sebanyak menu yang di definisikan */}
      {/*kemudian mengembalikan elemen <a/> */}
      <nav className="nav">{this.props.items.map((menu, index) => {
          var style = 'menu';

          if (this.state.color === menu.color) {
            style = `${style} is-active`;
          } 

        return <a className={style+" "+menu.color}
        //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked' 
        onClick={this.clicked.bind(this, menu)}
        key={index}>
          {menu.name}
        </a>;
        }) }
        </nav>

        <div className="info">
        {this.info(this.state.name)}
        </div>
    </div>

        
    );
  }   
} 

export default App;
