import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Create/>} />
        <Route path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
