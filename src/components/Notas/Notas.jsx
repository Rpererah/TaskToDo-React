import { Component, Fragment } from "react";
import {ListadeNotas} from "../index";
import './estilo.css';


export default class Notas extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="mb-2">
                    <div className="row">
                        {/* Colocamos o atributo index como key por ser um segundo parametro do map ele deve estar entre parenteses */}
                        {this.props.notas.map((nota, index) => {
                            return (

                                <div key={index} className="col-4 mb-1">
                                    <div  >
                                        <div className="card" style={{width:"12rem",height:"6rem",backgroundColor:"#F0E9E7",borderRadius: 12 + 'px'}}>
                                            <div className="card-body">
                                                <ul>
                                                    <h5>{}</h5>
                                                    <ListadeNotas titulo={nota.titulo} texto={nota.texto} />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </Fragment >

        );
    }
}