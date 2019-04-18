// Fichier : ./src/App.js
import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Establishment         from './establishments/establishment.js'
import {base} from '../Base';
// Un Component implémente la méthode render() et reçoit en paramètre ses props
class App extends Component {
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            pseudo  : "Inconnu",
            searchStringUser: "",
            establishments : [
                {
                    id          : "0890786GH",
                    name        : "Biberium",
                    description : "Un super bar karaoké"
                },
                {
                    id          : "0890786GD",
                    name        : "Brew Dogs",
                    description : "Un super bar à bière"
                },
                {
                    id          : "MJLMH0389",
                    name        : "Batonier",
                    description : "Un super bar de fin de soirée"
                }
            ]
        }
    }
    componentDidMount() {
        this.firebase = base.syncState('establishments', {
        context: this,
        state: 'establishments',
        asArray: true,
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.firebase);
    }
    handleChange(e){
        this.setState({searchStringUser: e.target.value});
    }
    test(){
        let newEstablishment = this.state.establishments
        newEstablishment.push({
        id : Date.now(),
        name : "",
        description : "Un super bar de fin de soirée"
        })
        this.setState({establishments: newEstablishment})
        }
    // On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
    // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
    randomPseudo = () => {
        // On s'amuse un peu ;)
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const size          = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            pseudo : randomPseudo
        })
    }
    render() {
        const establishmentFilter = this.state.establishments.filter((searchText) => {
            let search = searchText.name + " " + searchText.description;
            return search.toLowerCase().match(this.state.searchStringUser);
        })
      const listEstablishment = this.state.establishments.map ( (establishment)=> {
        return(
            <Establishment
            key={ establishment.id }
            establishment={ establishment } // on n'a pas oublié la props "establishment" :)
        />
        )
      })
        return (
            <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />

      <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>

      <p> 
        <a onClick={ this.randomPseudo } >Changer le pseudo !</a> 
      </p>
      <input
                            type="text"
                            placeholder="search"
                            value={this.state.searchStringUser}
                            onChange={this.handleChange.bind(this)}
                        />
    <button onClick={()=>this.test()}>Connard</button>
    </header>
    <div className="App-intro">
      { listEstablishment }
    </div>

  </div>
);
    }
}

export default App;
