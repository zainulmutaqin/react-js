import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';

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
handleSubmit(e){
  e.preventDefault();
  
  const nilai1 = parseInt(this.refs.nilai1.value);
  const nilai2 = parseInt(this.refs.nilai2.value);
  const operator = this.refs.operator.value;
  
  var hasil;
  switch(operator){
    case '+': 
    hasil = nilai1 + nilai2;
    break;
    case '-':
    hasil = nilai1 - nilai2;
    break;
    case '*':
    hasil = nilai1 * nilai2;
    break;
    case '/':
    hasil = nilai1 / nilai2;
    break;
  }
  this.setState({nilai1, nilai2, operator, hasil});
  
  this.refs.nilai1.value = null;
  this.refs.nilai2.value = null;
}

renderHasil(){
  const {nilai1, nilai2, operator, hasil} = this.state;
  if(this.state.hasil){
    return (
    <div>
      <br />
      <p className="alert alert-success">
      {"Hasilnya adalah "+hasil}
      </p>
    </div>	
    );
  }
  
}

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
      return(
        <div>
          <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
            <br></br>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="number" ref="nilai1"></input>
  			  <select ref="operator" className="form-control">
				  <option value="+">+</option>
				  <option value="-">-</option>
				  <option value="*">x</option>
				  <option value="/">:</option>
			    </select>
          <input type="number" ref="nilai2"></input> =...
          <br></br>
          <br></br>
          <button className="btn btn-primary">Count Me</button>
          </form>
          {this.renderHasil()}
        </div>
      )
      
    }
    else if(name == 'Profile'){
      //display menu profile
      return <Profile/>

    }
    else{
      //display default
      return(
      <div>
      I'am <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
          <br></br>
          <img src={this.state.img} width="240"></img>
          <br></br>
          <br></br>
          <img src={this.state.img2} width="240"></img>
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
