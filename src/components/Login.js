import React,{Component} from 'react'
import {Col,Row,Form ,Button,Card} from 'react-bootstrap'
import {Redirect,Link} from 'react-router-dom'
import {login} from '../Functions'
import Skeleton ,{ SkeletonTheme } from  "react-loading-skeleton"
import Header from './Header'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'




class Login extends Component{
  
constructor(props){
super(props)
this.state={
  email:'',
password:'',
islog:false,
error:"",
done:false,
redirect:false


}
this.onSubmit=this.onSubmit.bind(this)
this.onChange=this.onChange.bind(this)
}

logIn=(res)=>{
  var data={
 email:res.email,
  }
  this.setState({
    done:true
})
return axios
.post('https://backendj.herokuapp.com/api/facelock',
data
,{
    headers:{'Content-type':'application/json'}
}).then(res=>{
  localStorage.setItem('vk',res.data.token)
  localStorage.setItem('vkm',res.data.user.picture)
  this.setState({
    redirect:true,
    done:false
  })
 }).catch(err=>{
this.setState({
error:"Account not Registered",
done:false
})    
 })
}

onSubmit=(e)=>{
  e.preventDefault()
  this.setState({
    done:true
})
const user={
email:this.state.email,
password:this.state.password
}

login(user).then(res=>{
this.setState({
islog:true
})
this.props.history.push('/profile')
}).catch(err=>{
    console.log(err)
this.setState({
error:"Invalid Credidentials",
done:false
})

})
}

onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}
    responseFacebook = (response) => {
  this.logIn(response)
} 

render(){

  
  const color={
    color:'red'

}
const blue={
  color:'rgb(0 123 255)'

}
const {password,email}=this.state
  if(localStorage.vk||this.state.redirect){
    return (<Redirect to='/profile'/>)
    }else
    {
  return (
    
  this.state.done ?

<div className="text-center drop" >
<SkeletonTheme color="rgb(0 123 255)" highlightColor="white">
  
  <Skeleton circle={true} height={100} width={100} />
 <h3 style={blue} > Please wait...</h3>

  
</SkeletonTheme>

</div>
    :
    <div>
    <Header/>
    <Row>
    <Col md={3} sm={1} xs={1}></Col>
    <Col md={6} sm={10} xs={10}>
  <Card className="bg-default small">
  <Card.Header>
         <span className="fa fa-user"></span>
</Card.Header>
<Card.Body>
<Form >
<h6 style={color}>{this.state.error}</h6>
<Form.Group>
<Form.Label >Email</Form.Label>
<Form.Control type="email" name="email" 
onChange={this.onChange} value={email} placeholder="@" />
</Form.Group>
<Form.Group>
<Form.Label >Password</Form.Label>
<Form.Control name="password" 
onChange={this.onChange} value={password} type="password" placeholder="*****" />

</Form.Group>
<Link to='/register'>Create Account</Link>
<Button variant="primary" 
className="pull-right" onClick={this.onSubmit} size="sm"><span className="fa fa-home"></span>Login
</Button>
<FacebookLogin
    appId="596569237562159"
    autoload
    fields="name,email,picture"
    callback={this.responseFacebook} 
    cssClass="my-facebook-button-class"
    icon="fa-facebook"

    />

</Form>
</Card.Body>
</Card>
</Col>
<Col md={3} sm={1} xs={1}></Col>
</Row>
</div>
  )
  }

}
}

export default Login
