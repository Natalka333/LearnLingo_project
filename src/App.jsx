import { useEffect } from 'react';
import { uploadTeachers } from './utils/uploadTeachers.js';

import './App.css'
import TeachersList from './components/TeachersList/TeachersList.jsx';

function App() {
useEffect(() => {
  uploadTeachers();
}, []);

  return (
    <div>
    <TeachersList />
    </div>
  )
}

export default App;
