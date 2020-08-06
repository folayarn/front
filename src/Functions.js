import axios from 'axios'

        

        export const getList=()=>{
            return axios
            .get('https://backendj.herokuapp.com/api/allusers',{
                headers:{'Content-Type':'application/json'}

            }).then(res=>{
                return res.data
            }).catch(err=>{
                console.log(err)

            })
            }



    

export const login=(details)=>{
    return axios
    .post('https://backendj.herokuapp.com/api/login',
    details
    ,{
        headers:{'Content-type':'application/json'}
    }).then(res=>{
        localStorage.setItem('vk',res.data.token)
    }).catch(err=>{
        console.log(err)
})
}










