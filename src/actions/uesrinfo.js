
import axios from 'axios'

function userinfo(data){
    return{
        type:'userInfo',
        playload:{
            data
        }
    }
}

export default function getUserAction(){
    return function(dispatch,getState){
        axios.get('data')
        .then((res)=>{
            dispatch(userinfo(res.data))
        })
    }
}