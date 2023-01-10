import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import AllTS from "./components/AllTS"
import AddTS from "./components/AddTS"
import EditTS from "./components/EditTS"
import NavBar from './components/NavBar'

function App() {
  return <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/all-ts' element={<AllTS/>}/>
        <Route path='/add-ts' element={<AddTS/>}/>
        <Route path='/edit-ts/:id' element={<EditTS/>}/>
        <Route path='*' element={<Navigate to='/all-ts'/>}/>

      </Routes>
    </BrowserRouter>
  </>
}

export default App;
