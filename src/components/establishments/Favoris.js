import React, { Component } from 'react'

class Favoris extends Component {

    render() {
        return (   
        <div className="fav" >
            <i className="fas fa-star" onClick={()=>this.props.Etoile()} style={{color: this.props.color}} ></i>
        </div>
        )
    }
}

        export default Favoris