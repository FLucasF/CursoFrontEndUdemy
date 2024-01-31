import './App.css'

//Importando componente
import TemplaceExpression from './components/TemplaceExpression'
import FirstComponent from './components/FirstComponent'

//Hierarquia de componentes
import MyComponent from '../seção_36/secao_36/src/components/MyComponent'

function App() {
  //Comentarios
  return (
    <div>
      {/*Comentario em JSX*/}
      <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplaceExpression />
        <MyComponent />
    </div>
  )
}

export default App
