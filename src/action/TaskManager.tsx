import { useState } from "react"
import { useEffect } from "react"

type TaskList = {
    id: number,
    title: string,
    completed: boolean
}
const TaskManager = () => {
  const [taskList, setTaskList] = useState<TaskList[]>([
    {
        id: 1,
        title: "Zrobić zakupy",
        completed: false
    },
    {
        id: 2,
        title: "Posprzątać",
        completed: false,
    },
    {
        id: 3,
        title: "Siłownia",
        completed: false
    }
    ])
   const [activeTask, setActiveTask] = useState<number>(0);
   const[newTask, setNewTask] = useState<string>("");
   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let createNewTask:TaskList = {
            id:taskList.length +1,
            title: newTask,
            completed: false
        }
        setTaskList(prev => [...prev,createNewTask])
        setNewTask("");
   }
   const handleFinished = (id:number) => {
        setTaskList(prev => (
            prev.map(t => 
                t.id === id ? {...t,completed: true} : t
            )
        ))
   }
   

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={newTask}
        placeholder="Nowe zadanie"
        onChange={(e) => setNewTask(e.target.value)}/>
        <button type="submit">Dodaj</button>
        <ol>
            {taskList.length === 0 ? <p>Brak zadań</p> : 
                taskList.map(task => (
                        <li key={task.id}>
                            <p style={{color: task.completed ? "green" : "red"}}>{task.title}</p>
                            {!task.completed &&
                              <button onClick={() => handleFinished(task.id)}>Zakończ</button>
                            }
                        </li>
                ))
            }
        </ol>
      </form>
      <p>Aktywne zadania: {taskList.filter(t => t.completed === false).length}</p>
    </div>
  )
}

export default TaskManager
