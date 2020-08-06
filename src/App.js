import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Container,Col} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom'
import Routers from './Routers'
import Login from './components/Login'
import Register from './components/Register'
import Congrats from './components/Congrats'
import LoginSwitch from './components/LoginSwitch';
import PageNotFound from './components/PageNotFound';



class App extends Component{
  

render(){  
  
  return (

<Container className="body">
<Col md={12} sm={12} xs={12}>

<Switch>
<Route exact path='/'>

<Routers/>
</Route>
<Route exact  path='/register'>
<Register/>
</Route>
<Route exact  path='/login'>
<Login/>
</Route>
<Route  path='/profile'>
<LoginSwitch/>
</Route>
<Route exact  path='/success'>
<Congrats/>
</Route>
<Route path='*'>
<PageNotFound/>
</Route>
</Switch>
</Col>
  </Container>
  
  );
}
}
export default App;
