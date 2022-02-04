import React from 'react';

class TaskForm extends React.Component{

    constructor(){
        super()
        this.state = {inputData:''}
    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({inputData: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Clicked",this.state.inputData)

        this.props.onNewTask(this.state.inputData)
    }

    render(){
        return (
            <form>
                <input type="text" value={this.state.inputData} onChange={this.handleInputChange} />
                <button onClick={this.handleSubmit}>Submit</button>            
            </form>
    )}
}
//<input type="button" value="Submit" />

export default TaskForm