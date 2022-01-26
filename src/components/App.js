import React from 'react';
// import 'src/styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
// import Preferences from './Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/dashboard"> */}
            <Dashboard />
          {/* </Route> */}
          {/* <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;