import React from 'react'
import Games from './games';
import axios from 'axios';


class Read extends React.Component{

    state = {
        games: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/Games')
        .then((response)=>{
            this.setState({games: response.data.games})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <img src="https://i.pinimg.com/originals/d2/7a/7c/d27a7c048f9e8cf8c77add494dc64fbc.jpg"alt="website banner" width="1920" height="450" />
                <h1>Top New Posts!</h1>
                <Games myGames={this.state.games}></Games>
            </div>
        );
    }
}
export default Read;
