import { type Todo as TodoTypes } from '../types'

type Props = TodoTypes

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toogle"
        checked= {completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {}}
      >

      </button>
    </div>
  )
}
