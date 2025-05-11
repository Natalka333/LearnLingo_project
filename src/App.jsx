import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { uploadTeachers } from './utils/uploadTeachers.js';

import Home from './page/Home.jsx';
import Teacher from './page/Teachers.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

import './App.css'
// import TeachersList from './components/TeachersList/TeachersList.jsx';

function App() {
  // useEffect(() => {
  //   uploadTeachers();
  // }, []);

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teacher />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
