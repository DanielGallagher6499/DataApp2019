import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';
import Logo from './logo.png';

class Create extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Year:'',
                  Poster:'',
                  Review:'',
                  Rating:'',}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGameTitleChange = this.handleGameTitleChange.bind(this);
    this.handleGameYearChange = this.handleGameYearChange.bind(this);
    this.handleGamePosterChange = this.handleGamePosterChange.bind(this);
    this.handleGameReviewChange = this.handleGameReviewChange.bind(this);
    this.handleGameRatingChange = this.handleGameRatingChange.bind(this);
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

  handleGameRatingChange(e){
    this.setState({Rating: e.target.value});
  }

  handleSubmit(e){
    alert("Your Review Has Been Submitted! Thank you!");
    e.preventDefault();
    
    
                const newGame = {
                  title: this.state.Title,
                  year: this.state.Year,
                  poster: this.state.Poster,
                  review: this.state.Review,
                  rating: this.state.Rating
                };
          axios.post('http://localhost:4000/api/Games/',newGame) 
          .then()
          .catch();
                

          this.setState({Title:'',
                        Year:'',
                        Poster:'',
                        Review:'',
                        Rating:''});    
  }

  render() {
    return (
      <div className='Home'>
        {/*Top text of the page*/}
        <h1><b><u>Create Game Post!</u></b></h1>
        <h2>Fill in the following fields to enter a review!</h2>
        <br></br>
        {/*Website logo that when once clicked bring you to the home page / content page*/}
        <a href="/"><img height = "100" width="100"src={Logo} alt="website logo" /></a>
        <h3>Click this logo to return home</h3>
        <br></br>
                
        {/*Area for Game title to be entered - this section has a placeholder test and takes input and saves it*/}
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

        {/*Area for Game release year to be entered - this section has a placeholder test and takes input and saves it*/}
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

        {/*Area for poster URL to be entered - this section has a placeholder test and takes a poster URL and displays is on read when called*/}
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

        {/*Area for Game Review to be entered - thus section has a placeholder test and takes text input and saves it*/}
        <div className='form-group'>
          <label>Game Review</label>
          <textarea
          placeholder='Review of this game'
          row='3'
          className='form-control'
          value={this.state.Review}
          onChange={this.handleGameReviewChange}
          ></textarea>
        </div>
        <br></br>
        <br></br>
        <div>

        {/*Area for Game rating to be entered - this section has a placeholder test and takes input and saves it of the rating*/}
        <div className='form-group'>
          <label>Game Rating [Rating/10]</label>
          <input
          placeholder='Rating 1-10 (1/10 = Worst - 10/10 = Best)'
          type='text'
          className='form-control'
          value={this.state.Rating}
          onChange={this.handleGameRatingChange}
          ></input>
        </div>
        </div>

        {/*This is a button that once clicked will post the review and content submitted to the server*/}
        <div>
          <input
            type="submit"
            value="Submit Post!">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Create;