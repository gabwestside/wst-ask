import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';


function App() {
  return (
    // <Home />
    <Router>
      <Route exact path='/' >
        <Home />
      </Route>

      <Route path='/rooms/new'>
        <NewRoom />
      </Route>
    </Router>
  );
}

export default App;
