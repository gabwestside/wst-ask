import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

function App() {

  return (
    <AuthContextProvider>
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </Router>
    </AuthContextProvider> 
  );
}

export default App;