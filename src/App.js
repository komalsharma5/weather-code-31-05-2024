import React, { Component } from 'react'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Wether from './pages/Wether'





export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/wether' element={<Wether></Wether>}></Route>
          </Routes>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
