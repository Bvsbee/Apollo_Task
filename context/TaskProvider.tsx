import React, { createContext, useState, useContext, ReactNode } from "react";
import Task from "../classes/Task";

//Defining the idea of the task interface
interface TaskContextInterface {
  // Structures to store task
  tasksMap: Map<number, Task>;
  taskOrder: number[];

  // Functions to handle various operations of Task
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
  sortTask: (criteria: "name" | "priority" | "dueDate") => void;
}
m;

// Creating the context to be used globally. Is initially undefined.
const TaskContext = createContext<TaskContextInterface | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  // Map to store tasks for searching
  const [tasksMap, setTasksMap] = useState<Map<number, Task>>(new Map());

  // Array to store taskID's to render in proper order
  const [taskOrder, setTaskOrder] = useState<number[]>([]);

  // Function adding a new task upon Creation
  const addTask = (task: Task) => {
    setTasksMap((prevMap) => new Map(prevMap).set(task.taskID, task));
    setTaskOrder((prevOrder) => [...prevOrder, task.taskID]);
  };

  const removeTask = (id: number) => {
    setTasksMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.delete(id);
      return updatedMap;
    });

    setTaskOrder((prevOrder) => prevOrder.filter((taskID) => taskID! == id));
  };

  const completeTask = (id: number) => {};

  const sortTask = (criteria: "name" | "priority" | "dueDate") => {};

  return (
    <TaskContext.Provider
      value={{
        tasksMap,
        taskOrder,
        addTask,
        removeTask,
        completeTask,
        sortTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
