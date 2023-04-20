import './App.css';
import Botao from './componentes/Botao';
import Card from './componentes/Card';

function App() {
  return (
    <div>
      <h1>Olá mundo!</h1>
      <Card className="cards" cargo="estudante de Front-End"></Card>
      <Botao name="Desiree"></Botao>

      <Card className="cards" cargo="fisioterapeuta"></Card>
      <Botao name="Leonardo"></Botao>

    </div>

  );
}

export default App;
