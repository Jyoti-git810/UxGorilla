
import './App.css';
import Header from './Component/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';

const App=()=> {
  return (
    <div className="App">
      <Header/>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/manageCategory" component={Category}/>
     </Switch>
    </div>
  );
}

export default App;
