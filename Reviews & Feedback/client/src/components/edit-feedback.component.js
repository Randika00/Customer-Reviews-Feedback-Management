import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class EditFeedback extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        
        name:'',
        title: '',
       description:'',
       
      }
    }

  componentDidMount() {
    axios.get('http://localhost:8070/feedbacks/'+this.props.match.params.id)
      .then(response => {
        this.setState({
         name: response.data.name,
          title: response.data.title,
          description: response.data.description,
        
         
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
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
         description: this.state.description,
        
        
    }

    console.log(feedback);

    axios.post('http://localhost:8070/feedbacks/update/' + this.props.match.params.id, feedback)
    .then(() => {
      alert("Feedback Edited")
    }).catch((err)=>{
      alert("Failed to edit feedback")
    })
  window.location = '/';
  }

  
  render() {
    return (
    < div>
      <Link to={"/"}>Feedback List</Link><br></br>
      <center>
      <h3>Edit Feedback</h3><br></br>
      </center>
      <center>
      <form className="form2" onSubmit={this.onSubmit}>
        
      

          <div className="form-group">
             <label><b>Name: </b> </label>
              <input type="text"
              className="form-control"
              required
             value={this.state.name}
             onChange={this.onChangeName}
            />
        </div>
        <br/>


        <div className="form-group"> 
          <label><b>Title: </b> </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <br/>
      

        <div className="form-group"> 
          <label><b>Description: </b> </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <br/>
        
            

        
        <div className="form-group">
        <input type ='submit' value='Edit Feedback'  name='Edit Feedback' className="form-control btn btn-primary"  style = {{marginTop:"30px", backgroundColor: '#000066'}}/>
        </div>
      </form>
      </center>
    </div>
    )
  }
}