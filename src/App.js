import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Alert } from './components/Alert';
import NoteState from './context/notes/NoteState';

function App() {

  return (
    <>
     
     <NoteState>
     <Router>
     <Navbar />
     <Alert message="This is alert"/>
       <div className="container">
       <Routes>
         <Route exact path = "/" element={<Home />}/>
         <Route exact path = "/about" key='about' element={<About/>} />
       </Routes>
       </div>
     </Router>
     </NoteState>
     
     </> 
  );
}

export default App;
