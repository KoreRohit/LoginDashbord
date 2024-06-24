
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import StudentInfo from './components/StudentInfo.jsx';
import TeacherInfo from './components/TeacherInfo.jsx';
import MainDashbord from './components/MainDashbord.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Service from './components/Service.jsx';
import AdminInfo from './components/AdminInfo.jsx';

function App() {
  return (
    <>
      {/* <LoginForm/> */}
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/studentinfo" element={<StudentInfo/>}></Route>
        <Route path="/teacherinfo" element={<TeacherInfo/>}></Route>
        <Route path="/maindashbord" element={<MainDashbord/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/admininfo" element={<AdminInfo/>}></Route>
      </Routes>
    
    
    </>
  );
}

export default App;
