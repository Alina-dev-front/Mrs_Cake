import React from 'react';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/bakeryregistration' component={BakeryRegistration}/>
      </Switch>
    </BrowserRouter>

  );
}
export default App;
