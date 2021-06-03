import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle.length){
      const newTask:Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, newTask])
      console.log(tasks);
      
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const taskId = tasks.findIndex(task => task.id === id);

    if(taskId !== -1){
      const newTasks = tasks;

      newTasks[taskId].done = !newTasks[taskId].done;
      setTasks([...newTasks]);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task=> task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}