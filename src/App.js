// components & pages
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import {Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      {/* this path will render out the home component if it's on / or the game id */}
      <Route path={['/game/:id', '/']}>
      <Home />
      </Route>
      </div>
  );
}

export default App;
