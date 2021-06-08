import './App.css';
import { Route, Switch} from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Home from './pages/Home';



function App() {
  return (
    <Switch>
      <Route path="/1" component={ Page1 } />
      <Route path="/2" component={ Page2 } />
      <Route path="/3" component={ Page3 } />
      <Route path="/4" component={ Page4 } />
      <Route path="/" component={Home}/>

    </Switch>
  );
}

export default App;
