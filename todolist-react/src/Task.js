function Task(props) {
    return <div>
        <span>{props.todoItem.text}</span>
        <input onChange={(event) => props.handleUpdate(props.index, event.target.checked)} type="checkbox" checked={props.todoItem.checked} />
        <small onClick={() => props.handleDelete(props.index)}>Delete</small>
        </div>
}
export default Task