import Navbar from './component/navbar';
import Bar from './component/bar';
import './App.css';
import { Route, BrowserRouter as Router,Routes, } from 'react-router-dom';
import Admin from './page/admin';
import Detail from './page/detail';
// import PageOne from './page/pageone';
import PageTwo from './page/pagetwo';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes>
          <Route path="/" element={<Page />}/> 
          {/* <Route path='/detail' element={<Detail />} /> */}
          <Route path='page-one/:id'element={<Detail />} />
          <Route path="/page-two" element={<PageTwo />} />
      </Routes>
        
         
      </header>
    </div>
    </Router>
  );
}

function Page(){
  return(
    <div style={{display:'flex'}}>
          <Bar />
          <Admin />
    </div>
  );
}

export default App;
