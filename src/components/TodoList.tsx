import { useReducer, useEffect, type ChangeEvent } from "react"

type Job = {
  id: number
  title: string
  completed: boolean
}

type State = {
  jobs: Job[]
  new_title: string
}

type Action =
  | { type: "ADD"; payload: Job }
  | { type: "DELETE"; payload: number }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_JOBS"; payload: Job[] }

const initial: State = {
  jobs: [],
  new_title: "",
}

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, new_title: action.payload }

    case "SET_JOBS":
      return { ...state, jobs: action.payload }

    case "ADD":
      return {
        jobs: [...state.jobs, action.payload],
        new_title: "",
      }

    case "DELETE":
      return {
        ...state,
        jobs: state.jobs.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, initial)

  useEffect(() => {
    const data = localStorage.getItem("todos")
    if (data) {
      dispatch({ type: "SET_JOBS", payload: JSON.parse(data) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.jobs))
  }, [todos.jobs])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value })
  }

  const addTodo = () => {
    if (!todos.new_title.trim()) return
    const newTodo: Job = {
      id: Date.now(),
      title: todos.new_title,
      completed: false,
    }
    dispatch({ type: "ADD", payload: newTodo })
  }

  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE", payload: id })
  }

  return (
    <div>
      <input
        onChange={handleChange}
        value={todos.new_title}
        type="text"
        placeholder="Nhập công việc..."
      />
      <button onClick={addTodo}>Thêm công việc</button>
      <ul>
        {todos.jobs.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => deleteJob(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  )
}