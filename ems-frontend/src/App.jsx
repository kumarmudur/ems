import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
