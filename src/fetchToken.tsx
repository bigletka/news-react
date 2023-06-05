import axios from "axios";
import {useEffect} from 'react'



const fetchToken = ({...props}) => {
    const {username, password, setToken} = props;
    const url = 'http://127.0.0.1:8000/api/user/token'
    const fetchData = async () => {
        await axios.post(url, {
            username: username,
            password: password,
        }).then(function(response){
            console.log(response);
            
        }).catch(function(error){
            console.log(error)
            console.log('wewdw')
        })

        
    
    }
    
    useEffect(()=>{fetchData()},[])
    return <>
    <h1>Hello World</h1>
    </>};


export default fetchToken;