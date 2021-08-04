import React,{Component} from "react";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        const GetUrl = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(GetUrl).then(response => 
            this.setState({ 
                posts: response.data
            })
            )
    }
    render(){
        const Post = this.state.posts
        console.log('this is Home Page from Component',Post.map(item =>item))
        return(
            <div>
                <h1>Hey there this is Home Page</h1>
                <ul>
                    {
                        Post.map(item =>{
                            return <li>{item.title}</li>
                        })}
                </ul>
            </div>
        )
    }
}
export default Home;