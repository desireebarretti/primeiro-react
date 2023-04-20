import App from "../App";
import './botao.css'

export default function Botao(props) {
    return (
        <button className="botao-clique">{props.name}</button>
    )
}