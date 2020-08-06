import React,{Component} from 'react'
import { Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'



class Header extends Component{
  

render(){  
  
  return (

<Col md={12} sm={12} xs={12} className='text-center header'>
<ul>
<li>
<Link to='/'>
<span className="fa fa-home"></span> HOME
</Link>
</li>
<li>
<Link to='/register'>
 Register
</Link>
 </li>
 <li>
 <Link to='/login'>
 Login
</Link>
</li>
</ul>
 </Col>
 
  );
}
}
export default Header;
