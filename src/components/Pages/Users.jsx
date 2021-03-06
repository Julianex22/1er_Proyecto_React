import React, {Component} from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'

class Users extends Component{

    constructor(props){
        super(props)

        this.state= {
            users:[]
        }
    }

    /* componentDidMount(){

         var misCabeceras = new Headers();
        var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'no-cors',
               cache: 'default' }; 

        fetch('http://localhost:3001/api/getList', {mode: 'cors'})
        .then(response=> response.json())
        /* .then(response2=> console.log(response2)) 
        .then(response2=> {
            this.setState({users:response2})
        })
    } */

    componentDidMount(){
        axios.get('http://localhost:3001/api/getList')
        .then(response=> {
            this.setState({users:response.data})
        })
    }

    render(){
        const {users}= this.state
        return(
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
{users.map(u=>(<UserCard key={u.id} 
name={u.name} 
username= {u.username} 
email={u.email}/>))}
                </div>
            </div>

        )
    }
}

export default Users