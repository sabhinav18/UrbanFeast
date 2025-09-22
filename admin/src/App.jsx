import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import {Routes, Route} from 'react-router-dom'
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Orders from "./pages/Orders/Orders"
  import { ToastContainer } from 'react-toastify';
import { url } from "./assets/assets"




const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar  />
      <hr className="-mt-8" />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App