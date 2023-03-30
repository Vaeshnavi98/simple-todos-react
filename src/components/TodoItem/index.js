import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="user-card-container">
      <p>{title}</p>
      <button className="delete-button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
