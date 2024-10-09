import './App.css'
import BarraPesquisa from './components/BarraPesquisa'
import Filtro from './components/Filtro'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraPesquisa />
        <Filtro />
      </div>
    </div>
  )
}

export default App
