import logo from './logo.svg';
import './App.css';
import {Route,Routes,Router} from 'react-router-dom'

import Users from './components/Users';
import Navbar from './components/Navbar';
import AddUsers from './components/AddUsers';
import Edit from './components/Edit';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={< Users/>}/>
      <Route path='/add' element={< AddUsers/>}/>
      <Route path='/edit/:id' element={< Edit/>}/>
      <Route/>
      
    </Routes>
    
    
    </div>
  );
}

export default App;
