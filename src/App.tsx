import { useState } from 'react'
import './App.css'
import FormsHandling from './FormsExamples.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header.tsx';
import ReactBasics from './ReactBasics.tsx';



function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ReactBasics />} />
        <Route path='/react-examples' element={<FormsHandling />} />
        
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
