import React, { Component } from 'react'
import './estilo.css';

export default class ListadeNotas extends Component {
    render() {
        return (
            <>
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.texto}</p>
            </>
        )
    }
}
