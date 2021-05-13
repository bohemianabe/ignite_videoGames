// components & pages
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import {Route} from 'react-router-dom';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      {/* this path will render out the home component if it's on / or the game id */}
      <Route path={['/game/:id', '/']}>
      <Home />
      </Route>
      </div>
  );
}

export default App;
