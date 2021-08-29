import { Component, Fragment } from "react";
import Formulario from "./components/Formulario";
import Notas from "./components/Notas";

export default class App extends Component {
  render(){
    return (
      <>
        <Formulario/>
        <Notas/>
      </>
    );
  }
}


