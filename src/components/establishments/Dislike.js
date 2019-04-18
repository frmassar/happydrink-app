import React, { Component } from 'react'

class Dislike extends Component {

    render() {
     
        return (   
        <div className="like" onClick={()=>this.props.lessclick()}>
        <i className="fas fa-thumbs-down"></i>
        </div>
        )
    }
}

        export default Dislike