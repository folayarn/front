import React,{Component} from 'react';
import {Col,Button} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom'
import Profile from './Profile'
import HeaderPro from './HeaderPro';
import axios from 'axios'


class LoginSwitch extends Component{
         constructor(){
                  super()
                  this.state={
                    id:'',
                    name:'',
                    email:'',
        image:'',
                    isnotlog:false,
                    loading:false
           }
           this.logout=this.logout.bind(this)
    
                           
                          }
                   
                       componentDidMount(){
                         this.setState({
                           loading:true
                         })
                         
                         if(localStorage.vk){
                          let image=localStorage.getItem('vkm')
                          this.setState({
                            image:image,
                            loading:false
                            })
                         axios.get('https://backendj.herokuapp.com/api/user',{
                            headers:{Authorization: `Bearer ${localStorage.vk}`}
                        
                        }).then((res)=>{
                            this.setState({
                            name:res.data.name,
                            id:res.data.id,
                            email:res.data.email,
                            loading:false
                            })
                        })
                      }
                              }





                          logout=(e)=>{
                            e.preventDefault()
                        localStorage.removeItem('vk')
                        localStorage.removeItem('vkm')
                        this.setState({
                         isnotlog:true
                        })
                        }
render(){  
         
         const user={
           id:this.state.id,
           name:this.state.name,
           email:this.state.email,
           loading:this.state.loading
         }
       
  return (
           <div>
           
         <HeaderPro image={this.state.image}/> 


         <Button size='sm' variant="danger" 
         onClick={this.logout}>
         <span className="fa fa-sign-out"></span>Logout</Button>

<Col md={12} sm={12} xs={12}>
<Switch>
<Route exact path='/profile'>
<Profile {...user}/>
</Route>
</Switch>
</Col>
 </div>
  )


}
}
export default LoginSwitch;
