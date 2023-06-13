import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
   <div className='App'>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
      <Route patch = '/' element ={<ItemListContainer/>} />
      <Route patch = '/category/:categoryId' element ={<ItemListContainer/>} />
      <Route patch = '/Item/:itemId' element ={<ItemDetailContainer/>} />
      <Route patch = '*' element ={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
