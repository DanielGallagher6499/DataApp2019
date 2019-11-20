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
                <img src={"http://spaceglo.cz/wp-content/uploads/2018/03/1920-x-300-banner.jpg"} alt="trending banner" height = "18.52%" width = "100%" />
                <h1>Top New Posts!</h1>
                <Games myGames={this.state.games}></Games>
            </div>
        );
    }
}
export default Read;
