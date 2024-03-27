import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class CreateFeedback extends Component {
constructor(props) {
super(props);
this.onChangeName = this.onChangeName.bind(this);
this.onChangeTitle = this.onChangeTitle.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.onSubmit = this.onSubmit.bind(this);



this.state = {
name: '',
title: '',
description: '',
}
}




onChangeName(e) {
this.setState({
name: e.target.value
})
}



onChangeTitle(e) {
this.setState({
title: e.target.value
})
}




onChangeDescription(e) {
this.setState({
description: e.target.value
})
}





onSubmit(e) {
e.preventDefault();



const feedback = {
name: this.state.name,
title: this.state.title,
description:this.state.description,


}



console.log(feedback);



axios.post('http://localhost:8070/feedbacks/add', feedback)
.then(() => {
alert("Feedback Added")
}).catch((err)=>{
alert("Failed to add feedback")
})
// window.location = '/';
}



render() {
return (
<div>
<Link to={"/feedback"}>Feedback List</Link><br></br>
<center>
<h3>Create New Feedback</h3><br></br>
</center>
<center>
<form className="form1"onSubmit={this.onSubmit} >




<div className="form-group">
<label><b>Name: </b> </label>
<input type="text"
required
className="form-control"
value={this.state.name}
onChange={this.onChangeName}
/>
</div>
<br/>



<div className="form-group">
<label><b>Title: </b> </label>
<input type="text"
required
className="form-control"
value={this.state.title}
onChange={this.onChangeTitle}
/>
</div>
<br/>




<div className="form-group">
<label><b>Description:</b> </label>
<textarea
required
className="form-control"
value={this.state.description}
onChange={this.onChangeDescription}
/>
</div>
<br/>



<div className="form-group">
<input type ='submit' value='Create Feedback' name='Create Feedback' className="form-control btn btn-primary" style = {{marginTop:"30px",backgroundColor: '#000066',color:'wheat'}}/>
</div>
</form>
</center>
</div>
)
}
}