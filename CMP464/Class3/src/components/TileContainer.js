import React from "react";
import Tile from './Tile'

export default class TileContainer extends React.Component {

    constructor(){
        super()

        this.state={color: "blue"}
    }

    handleClick = () => {
        if(this.state.color =="blue"){
            this.setState({color:'pink'})
        } else {
            this.setState({color:'red'})
        }
        
    }

    render(){
        return(
            <div>
                <Tile colorToShow={this.state.color} />
                <button onClick={this.handleClick}>Change the State!</button>
            </div>
        )
    }
}