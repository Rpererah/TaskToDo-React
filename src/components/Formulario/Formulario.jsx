import React, { Component } from 'react';

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }
    _handlerMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo=evento.target.value;
    }
    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto=evento.target.value;
    }
    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto);
    }
    render() {
        return (
            <div>
                <form
                onSubmit={this._criarNota.bind(this)}
                >
                    <div className="mb-3">
                        <label htmlFor="tituloNota"  className="form-label">Titulo da nota</label>
                        <input type="text"
                        placeholder="titulo"
                        className="form-control"
                        id="tituloNota"
                        aria-describedby="tituloNota"
                        onChange={this._handlerMudancaTitulo.bind(this)}
                        />
  </div>
                        <div className="mb-3">
                            <label htmlFor="descricaoNota"  className="form-label">Descricao da nota</label>
                            
                            <textarea
                            className="form-control"
                            placeholder="descricao"
                            id="descricaoNota"
                            onChange={this._handleMudancaTexto.bind(this)}
                            />
  </div>
                                <button type="submit" className="btn btn-secondary mb-2">Criar Nota</button>
</form>

                        </div>
                        )
    }
}
