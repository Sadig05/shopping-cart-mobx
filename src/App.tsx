import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useStore } from './stores/RootStore'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { observer } from 'mobx-react'

function App() {
  const {shopStore} = useStore();
  return (
    <div className="App">
      <Navbar/>
      {
        shopStore.mainPage ? <Shop/> : <Cart/>
      }
    </div>
  )
}

export default observer(App); 
