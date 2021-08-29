import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Titulo da Nota" />
                    <textarea placeholder="descricao da nota" />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
