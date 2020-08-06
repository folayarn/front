import React from 'react';
import { Button,Col} from 'react-bootstrap'
import {Redirect,Link} from 'react-router-dom'


 function Congrats() {
         
         if(!localStorage.vk){
                  return (<Redirect to='/login' />)
                  }else{
 
  return (

 <Col className='text-center below'>
 <h1>Congratulations you are successfully registered</h1>
<Link to="/profile">
 <Button variant="primary"  size="lg">
<span className="fa fa-user"></span>Goto your Profile</Button>
</Link>
</Col>

  
  )
  }
}
export default Congrats;
