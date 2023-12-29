import './App.css'
import Navbar from './components/Navbar/Navbar'
import Priceoptions from './components/priceoption/Priceoptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl'>Price </h1>
      <Priceoptions></Priceoptions>
      
    </>
  )
}

export default App
