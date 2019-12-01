import React from 'react'
import Games from './games';
import axios from 'axios';
import Logo from './logo.png';


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
                {/*The image banner on the page*/}
                <img src={"http://spaceglo.cz/wp-content/uploads/2018/03/1920-x-300-banner.jpg"} alt="trending banner" height = "18.52%" width = "100%" />
                <h1><b><u>Community Reviews!</u></b></h1>
                <Games myGames={this.state.games}></Games>
                {/*Site logo that once clicked bring you to the top of the reading page*/}
                <a href="/read"><img height = "100" width="100"src={Logo} alt="website logo" /></a>
                <h2>Return to the top!</h2>
            </div>
        );
    }
}
export default Read;
