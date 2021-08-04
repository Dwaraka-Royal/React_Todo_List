import React,{Component} from "react";
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super()
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        const Getusers = "https://reqres.in/api/users/"
        axios.get(Getusers).then((response) =>
        this.setState({users:response.data.data})
        )
    }
    render(){
        console.log('this is Users Page from COmponent',this.state.users)
        return(
            <div>
            <h1>Hey there this is Users Page</h1>
            <ul>
                {
                    this.state.users.map(item=>{

                        return(
                            <div>
                                <li>
                                    <h7>{item.first_name}</h7>
                                    <h7>{item.last_name}</h7>
                                </li>
                                <hr/>

                                <img src={item.avatar} alt={item.name}/>
                            </div>
                        )
                    })
                }
    
            </ul>
            </div>
        )
    }
}
export default Users;