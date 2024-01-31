import './App.css'

//Importando componente
import TemplaceExpression from './components/TemplaceExpression'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  //Comentarios
  return (
    <div>
      {/*Comentario em JSX*/}
      <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplaceExpression />
        <MyComponent />
        <Events />
    </div>
  )
}

export default App
