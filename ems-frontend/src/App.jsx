import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Department from './components/Department';
import DepartmentList from './components/DepartmentList';
import EmployeeList from './components/EmployeeList';
import Employee from './components/Employee';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/employees' element={<EmployeeList />} />
        <Route path='/add-employee' element={<Employee />} />
        <Route path='/edit-employee/:id' element={<Employee />} />
        <Route path='/departments' element={<DepartmentList />} />
        <Route path='/add-department' element={<Department />} />
        <Route path='/edit-department/:id' element={<Department />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
