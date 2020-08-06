import React,{Component} from 'react';
import { Row,Col} from 'react-bootstrap'
import DataBody from './DataBody'
import {Redirect} from 'react-router-dom'


class Profile extends Component{
  

  
render(){
  const user={
    id:this.props.id,
    name:this.props.name,
    email:this.props.email,
    loading:this.props.loading
  }

  if(localStorage.vk){

  return (
    <div>
<Row>
<Col md={2} sm={1} xs={1}>

</Col>

<DataBody {...user}/>

<Col md={2} sm={1} xs={1}></Col>
</Row>

<Col md={12} sm={12} xs={12}>
<Row>
  
</Row>
</Col>
  </div>
  );
}else{
  return(<Redirect to='/login'/>)
}
}
}
export default Profile;
