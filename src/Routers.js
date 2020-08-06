import React,{Component} from 'react';
import { Row,Col,Alert} from 'react-bootstrap'
import Below from './components/Below'

import Header from './components/Header'
import HeaderPro from './components/HeaderPro'

class Router extends Component{
  
 

render(){

  return (
<div>

{!localStorage.vk? <Header/>:<HeaderPro/>}

<Row> 
<Col md={12} sm={12} xs={12} >
<h3 className="text-center"><Alert variant="primary">
<strong> Facebook Login implementation with React</strong></Alert></h3>
</Col>
<Col md={12} sm={12} xs={12} >
<Row>
           <Col md={2} > 
</Col>
           <Col md={8} sm={12} xs={12}> 
<Below/>
</Col>
<Col md={2} >
</Col>
</Row>
</Col>




</Row>
  </div>
  );
}
}
export default Router;
