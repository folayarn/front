import React from 'react';
import { Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



 function Below() {
         
  
  return (

 <Col className='text-center below'>
 <p>HUrray!!! Lets get to work</p>
  {!localStorage.vk?
  <div>
<Link to="/register"><Button variant="primary"> Register</Button></Link>
<br/> Or <br/>
<Link to="/login"><Button variant="primary">Login</Button>
</Link>
</div>
:
<Link to="/profile"><Button variant="primary">
{localStorage.vkm?
<img className="img-fluid rounded-circle" alt="" src={localStorage.getItem('vkm') }/>:
<span className="fa fa-user"></span> }  Visit Your Profile</Button>
</Link>}
</Col>

  
  )

}
export default Below;
