import React from 'react'
import './css/Tile.css'

class Tile extends React.Component {

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
            <div className={'Tile'} style={{backgroundCoolor: this.state.color}}>
            {/* <div className={'Tile'} style={{backgroundCoolor: this.props.colorToShow}}> */}
                I'm a tile!
            </div>
        )
    }

}

export default Tile;