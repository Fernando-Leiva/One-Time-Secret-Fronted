
import './App.css';
import { Home } from './components/home/home';
import { ShowSecret } from './components/uiSecret/secret';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React from 'react';

function App() {
  const [url, setUrl] = React.useState('')
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home setUrl={setUrl}/>}></Route>
          <Route exact path={window.localStorage.getItem('url')} element={<ShowSecret url={url} />}> </Route>
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
