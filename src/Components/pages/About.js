import React, { Component } from "react";
import axios from "axios";
import "./styles/About.css";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: [],
        };
    }

    componentDidMount() {
        console.log("About");
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => this.setState({ Posts: res.data }));
    }
    render() {
        const GetData = ["Apple", "Banana", "Capsicum", "Dougnut", "Elephant"];
        console.log("this is About Page from COmponent");
        return (
            <div className="AboutHeader">
                <h1>Hey there this is About Page</h1>
                <ul>
                    {this.state.Posts.map((item) => (
                        <li>{item.title}</li>
                    ))}
                    <hr />
                </ul>
                <select>
                    {GetData.map((item) => (
                        <option>{item}</option>
                    ))}
                </select>
            </div>
        );
    }
}
export default About;
