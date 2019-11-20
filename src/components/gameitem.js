import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
class GameItem extends React.Component{

  constructor(){
    super();
    this.DeletePost = this.DeletePost.bind(this);
  }
  DeletePost(e){
    console.log("Delete Post");
          axios.delete('http://localhost:4000/api/Games/'+this.props.game._id)
    .then()
    .catch();
  }

  render(){
        return(
            <div>
                {/* <h4>{this.props.game.Title}</h4>
                <p>{this.props.game.Year}</p>
                <img src={this.props.game.Poster}></img> */}


                <Card  border="primary">
  <Card.Header>{this.props.game.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.game.poster}></img>
      <footer>
      {this.props.game.year}
      <br></br>
      {this.props.game.review}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeletePost} >Delete Post</Button>
  <Link to={"/edit/"+this.props.game._id}className="btn btn-primary">Edit Post</Link>
</Card>
            </div>
        )
    }
}
export default GameItem;