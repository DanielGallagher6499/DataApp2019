import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Create extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Year:'',
                  Poster:'',
                  Review:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGameTitleChange = this.handleGameTitleChange.bind(this);
    this.handleGameYearChange = this.handleGameYearChange.bind(this);
    this.handleGamePosterChange = this.handleGamePosterChange.bind(this);
    this.handleGameReviewChange = this.handleGameReviewChange.bind(this);
  }
  
  handleGameTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleGameYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleGamePosterChange(e){
    this.setState({Poster: e.target.value});
  }

  handleGameReviewChange(e){
    this.setState({Review: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Title+ "      " + this.state.Year 
    +"       "+ this.state.Poster+"      " + this.state.Review);
    e.preventDefault();
    
    
                const newGame = {
                  title: this.state.Title,
                  year: this.state.Year,
                  poster: this.state.Poster,
                  review: this.state.Review
                };
          axios.post('http://localhost:4000/api/Games/',newGame) 
          .then()
          .catch();
                

          this.setState({Title:'',
                        Year:'',
                        Poster:'',
                        Review:''});    
  }

  render() {
    return (
      <div>
        <h1>Create Game Post!</h1>
        <h2>Please fill in the following details</h2>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Game Title</label>
          <input
          placeholder='Game Title'
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleGameTitleChange}
          ></input>
        </div>
        <br></br>
        <div className='form-group'>
          <label>Year Of Release</label>
          <input
          placeholder='Year of release'
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleGameYearChange}
          ></input>
        </div>
        <br></br>
        <div className='form-group'>
          <label>Poster Url</label>
          <textarea
          placeholder='Max Size/Optimum Size : 500 x 500'
          row='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleGamePosterChange}
          ></textarea>
        </div>
        <br></br>
        <div className='form-group'>
          <label>Review</label>
          <input
          placeholder='Review'
          type='text'
          className='form-control'
          value={this.state.Review}
          onChange={this.handleGameReviewChange}
          ></input>
        </div>
        <br></br>
        <div>
          <input
          type="submit"
          value="Submit Post">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Create;