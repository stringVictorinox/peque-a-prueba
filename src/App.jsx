import SideBar from './components/SideBar/SideBar'
import Home from './components/Home/Home'
import './App.css'

function App() {

  return (
    <>
      <div className='flex'>
        <SideBar />
        <Home />
      </div>
    </>
  )
}

export default App
