import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};
type Filter = 'active' | 'finished' | 'all';

const TaskList = () => {
  const [task, setTask] = useState<Task[]>([
    { id: 1, title: "zakupy", completed: false },
    { id: 2, title: "sprzątanie", completed: false },
    { id: 3, title: "spacer", completed: true },
  ]);

  const [filter, setFilter] = useState<Filter>('all');

  const handleFinishAll = () => {
    setTask(prev => prev.map(t => ({ ...t, completed: true })));
  };

  const handleFinishOne = (id: number) => {
    setTask(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: true } : t
      )
    );
  };

  return (
    <div>
       <button onClick={() => setFilter('all')}>Pokaż wszystkie</button>
       <button onClick={() => setFilter('finished')}>Pokaż ukończone</button>
       <button onClick={() => setFilter('active')}>Pokaż aktywne</button>
      {task
      .filter(task => {
        if(filter == 'active') return !task.completed ;
        if(filter == 'finished') return task.completed;
        return true
      })
      .map(task => (
        <div key={task.id}>
          <p style={{ color: task.completed ? "green" : "red" }}>
            {task.title}
          </p>
          {!task.completed && (
            <button onClick={() => handleFinishOne(task.id)}>
              Zakończ
            </button>
          )}
        </div>
      ))}

      <button onClick={handleFinishAll}>Zakończ wszystkie</button>
    </div>
  );
};

export default TaskList;
