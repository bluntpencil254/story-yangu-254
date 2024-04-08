import Navbar from './Navbar';
import BlogDetails from './blogDetails';
import Create from './create';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Nonexisting from './nonexisting';


function App() {
  return (
   <Router>
     <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/create">
                <Create />
            </Route>
            <Route path="/blogs/:id">
                <BlogDetails />
            </Route>
            <Route path= "*">
                <Nonexisting />
            </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
