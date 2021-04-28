// import logo from './logo.svg';
import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
// import Album from './Components/Album'
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "netflix", album_title: "hmm", album_cover: "dark", songs: "dark ses one"},
        {id: 2, artist: "netflix dark", album_title: "dark two", album_cover: "dark two", songs: "dark Track2"},
        {id: 3, artist: "netflix dark three", album_title: "dark", album_cover: "dark three", songs: "dark Track3"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
  }
  render() {
    return (
      
      <div className="App">
        <AddAlbum receiveFunc = {this.receiver}/>
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
    )
  }
}

export default App
