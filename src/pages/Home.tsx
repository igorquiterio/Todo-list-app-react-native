import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

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
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const toggleSwitch = () => setDarkTheme(previousState => !previousState);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle.length){
      const newTask:Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, newTask])      
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
    <View style={{
      backgroundColor: darkTheme? '#1F1F1F' : '#fff',
      flex: 1
    }}>
      <Header isThemeDark={darkTheme} toggleSwitch={toggleSwitch}/>

      <TodoInput addTask={handleAddTask} isThemeDark={darkTheme}/>

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        isThemeDark={darkTheme}
      />
    </View>
  )
}