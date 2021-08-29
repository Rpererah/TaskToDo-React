import { Component, Fragment } from "react";
import ListadeNotas from "./ListadeNotas";

export default class Notas extends Component {
    render() {
        return (
            <Fragment>
                <div>

                    <ListadeNotas />

                </div>
                <div>
                    <ListadeNotas />
                </div>
                <div>
                    <ListadeNotas />
                </div>
            </Fragment>

        );
    }
}