import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Feedback = props => (
<tr>

<td>{props.feedback.name}</td>
<td>{props.feedback.title}</td>
<td>{props.feedback.description}</td>

<td>
<a href={"/edit/"+props.feedback._id}
class="btn btn-warning" id="delete">
<i class="fas fa-edit">&nbsp;Edit</i></a>
&nbsp;

<a href="#" onClick={() => { props.deleteFeedback(props.feedback._id) }}
class="btn btn-danger" id="delete">
<i class="fas fa-trash-alt">&nbsp;Delete</i></a>
</td>
</tr>
);





export default class FeedbacksList extends Component {
constructor(props) {
super(props);

this.deleteFeedback = this.deleteFeedback.bind(this)



this.state = {feedbacks: []};
}



componentDidMount() {
axios.get('http://localhost:8070/feedbacks/')
.then(response => {
this.setState({ feedbacks: response.data })
})
.catch((error) => {
console.log(error);
})
}



deleteFeedback(id) {
axios.delete('http://localhost:8070/feedbacks/'+id)
.then(() => {
alert("Feedback Deleted")
}).catch((err)=>{
alert("Failed to delete feedback")
})



this.setState({
feedbacks: this.state.feedbacks.filter(el => el._id !== id)
})
}



feedbackList() {
return this.state.feedbacks.map(currentfeedback => {
return <Feedback feedback={currentfeedback} deleteFeedback={this.deleteFeedback} key={currentfeedback._id}/>;
})
}

filterContent(feedbacks, searchTerm){
const result=feedbacks.filter((feedback) =>
feedback.name.includes(searchTerm));

this.setState({feedbacks: result});
}





handleTextSearch =(e)=>{
const searchTerm=e.currentTarget.value;
axios.get('http://localhost:8070/feedbacks/')
.then((res) =>{
if(res.data.success){
this.filterContent(res.data.feedback, searchTerm)
}
});
};
render() {
    return (
    <div className ="container">
    <Link to={"/create"}>Create Feedback</Link><br></br>
    <center>
    <h3>Feedbacks List</h3><br></br></center>
    <div className ="row">
    <div className="col-lg-9 mt-2-mb-2">
    </div>
    <div className="col-lg-3 mt-2-mb-2">
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchTerm"
    onChange={this.handleTextSearch}></input>
    </div>
    <br/>
    </div> 
    
    
    <center>
    <div>
    <table className="container">
    <table className="table">
    <table bgcolor="#add8e6" align="center" width="100%">
    <thead className="text-gold">
    <tr>
    <th scope="col">Name</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    
    </tr>
    </thead>
    <tbody>
    { this.feedbackList() }
    </tbody>
    </table>
    </table>
    </table>
    </div>
    </center>
    </div>

    )
    }
    }