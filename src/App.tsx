import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useStore } from './stores/RootStore'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";   

function App() {
  const {shopStore} = useStore();
  return (
    <div className="App">
      <Navbar/>
      {
        shopStore.mainPage ? <Shop/> : <Cart/>
      }
         <ToastContainer />
    </div>
  )
}

export default observer(App); 
