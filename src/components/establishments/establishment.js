import React, { Component } from 'react'
import Like from './Like.js'
import Dislike from './Dislike.js'
import Favoris from './Favoris'
class Establishment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like  : 0,
            dislike:0,
            color:"",
        }
    }
    addclick =()=> {
        this.setState(state => ({
            like: state.like + 1
          }));
    }

    lessclick =()=> {
        this.setState(state => ({
            dislike: state.dislike - 1
          }));
        }
    Etoile =()=>{
        this.setState(state => ({
            color: state.color === 'red' ? 'yellow' : 'red'
          }));
          console.log(this.state.fav)

    }    
            
    render() {
 
        return (
            <div className='establishment' >
                <h3>{ this.props.establishment.name }</h3>
                { this.props.establishment.description }
                <Like addclick={this.addclick}/>
                <div className="like">{this.state.like}</div>
                <Dislike lessclick={this.lessclick} />
                <div className="like">{this.state.dislike}</div>

                <Favoris  Etoile={this.Etoile} color={this.state.color} />

            </div>
        );
    }
}

export default Establishment;