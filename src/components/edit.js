import React from 'react';
import axios from 'axios';
import Logo from './logo.png';

class Edit extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {Title:'',
                  Year:'',
                  Poster:'',
                  Review:'',
                  Rating:'',
                  _id:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeGameTitle = this.handleChangeGameTitle.bind(this);
    this.handleChangeGameYear = this.handleChangeGameYear.bind(this);
    this.handleChangeGamePoster = this.handleChangeGamePoster.bind(this);
    this.handleChangeGameReview = this.handleChangeGameReview.bind(this);
    this.handleChangeGameRating = this.handleChangeGameRating.bind(this);
  }

  handleChangeGameTitle(event) {
    this.setState({Title: event.target.value});
  }

  handleChangeGameYear(event) {
    this.setState({Year: event.target.value});
  }

  handleChangeGamePoster(event) {
    this.setState({Poster: event.target.value});
  }

  handleChangeGameReview(event) {
    this.setState({Review: event.target.value});
  }

  handleChangeGameRating(event) {
    this.setState({Rating: event.target.value});
  }

  handleSubmit(event) {
    alert('This post has been Updated');
    event.preventDefault();

    const newGame = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster,
      review: this.state.Review,
      rating: this.state.Rating
  };

    axios.put('http://localhost:4000/api/games/' + this.state._id, newGame)
    .then()
    .catch();
    
    this.setState({Title:'',
                    Year:'',
                    Poster:'',
                    Review:'',
                    Rating:''});    
  }


    componentDidMount(){
        alert(this.props.match.params.id)
        axios.get('http://localhost:4000/api/games/' + this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id: response.data._id,
                Title: response.data.title,
                Year: response.data.year,
                Poster: response.data.poster,
                Review: response.data.review,
                Rating: response.data.rating
            })
        })
        .catch();
    }

    render(){
      return (
        <div className='Home'>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Game Title</label>
                <input 
                type="text" 
                className='form-control' 
                value={this.state.Title} 
                onChange={this.handleChangeGameTitle} />
            </div>

            <div className="form-group">
              <label>Year Of Release</label>
                <input 
                type="text" 
                className='form-control' 
                value={this.state.Year} 
                onChange={this.handleChangeGameYear} />
            </div>
            
            <div className="form-group">
              <label>Poster URL</label>
                <textarea 
                row='3'
                className='form-control' 
                value={this.state.Poster} 
                onChange={this.handleChangeGamePoster} />
            </div>

            <div className="form-group">
              <label>Game Review</label>
                <textarea 
                row='3'
                className='form-control' 
                value={this.state.Review} 
                onChange={this.handleChangeGameReview} />
            </div>

            <div className="form-group">
              <label>Game Rating</label>
                <input 
                type="text" 
                className='form-control' 
                value={this.state.Rating} 
                onChange={this.handleChangeGameRating} />
            </div>

            <div>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    }

}

export default Edit;