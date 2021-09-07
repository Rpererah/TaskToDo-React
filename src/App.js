import { Component} from "react";
import {Formulario,Notas} from './components/';
export default class App extends Component {
  constructor(){
    super();
    this.notas=[];
    this.state={
      notas:[]
    };
  }
  criarNota(titulo,texto){
    const novaNota={titulo,texto};
    const novoArrayNotas=[...this.state.notas,novaNota]
    const novoEstado={
      notas:novoArrayNotas
    }
    this.setState(novoEstado);

  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">

          <div className="col-4">
            <Formulario criarNota={this.criarNota.bind(this)} />
          </div>

          <div className="col-7 mb-2">
            <Notas notas={this.state.notas} />
          </div>

        </div>
      </div>
    );
  }
}