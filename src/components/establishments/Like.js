import React, { Component } from 'react'

class Like extends Component {

    render() {
     
        return (   
        <div className="like" onClick={()=>this.props.addclick()}>
        <i className="fas fa-thumbs-up"></i>
        </div>
        )
    }
}

        export default Like
