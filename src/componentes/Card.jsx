import Botao from "./Botao";
import App from "../App";
import './card.css'

export default function Card(props) {
    return (
        <div className="cards">
            <h3>Sou {props.cargo}</h3>
            <p>Clique abaixo para me conhecer:</p>
        </div>
    )
}