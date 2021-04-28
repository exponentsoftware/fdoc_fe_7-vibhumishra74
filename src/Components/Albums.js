import React, { Component } from 'react'
import Album from './Album';
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {/* pass array directly from app */}
                {this.props.albums.map(album => {
                return (<ul style={{listStyleType:"none"}} >
                    <img alt="example" src="https://m.media-amazon.com/images/M/MV5BMzA2NDkwNjAwMl5BMl5BanBnXkFtZTgwNTA2OTYzNjM@._V1_.jpg" width="300" height="380" />
                    <li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

               
            </div>
        )
    }
}

export default Albums