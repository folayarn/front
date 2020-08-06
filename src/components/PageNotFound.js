import React from 'react';
import { Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'



 function PageNotFound() {
         
  
  return (

 <Col className='text-center'>
 <h4 style={{color:"red"}}>Sorry! The page you are looking for does not exist</h4>
 
  <Link to='/'>

 Go to Homepage
  </Link>
  
</Col>

  
  )

}
export default PageNotFound;
