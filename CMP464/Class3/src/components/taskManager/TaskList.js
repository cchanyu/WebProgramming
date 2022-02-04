function TaskList(props) {
    const list = props.data.map((task, index) => {
        return (<li key={index}>{task}</li>)
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default TaskList