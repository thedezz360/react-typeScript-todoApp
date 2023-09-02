import { type TodoId, type Todo as TodoTypes } from '../types'

interface Props extends TodoTypes {
  handleRemove: (id: TodoId) => void
  handleCompleted: ({
    id,
    completed
  }: Pick<TodoTypes, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleCompleted({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckbox}
        // otra manera de hacerlo sin tener que crear el handleChangeCheckbox
        // onChange={(e) => {
        //   handleCompleted({ id, completed: e.target.checked })
        // }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          handleRemove({ id })
        }}
      ></button>
    </div>
  )
}
