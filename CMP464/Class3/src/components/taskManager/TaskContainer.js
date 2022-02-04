import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import React from 'react'

class TaskContainer extends React.Component{

    constructor(){
        super()
        this.state = {tasks: []}
    } 

    handleNewTask = (task) => {
        let oldData = this.state.tasks
        console.log(this.state)
        this.setState({tasks: [...oldData, task]})
        // this.setState({tasks: oldData.push(task)})
    }

    render(){
        return (
            <div>
                <TaskForm onNewTask={this.handleNewTask} />
                <TaskList data={this.state.tasks} />
            </div>
        )
    }
}

export default TaskContainer