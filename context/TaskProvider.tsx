import React, { createContext, useState, useContext, ReactNode } from "react";
import Task from "../classes/Task";

//Defining the idea of the task interface
interface TaskContextInterface {
  // Structures to store task
  tasksMap: Map<number, Task>;
  taskOrder: number[];
  selectedTaskSet: Set<number>;
  // Functions to handle various operations of Task
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
  selectTask: (id: number) => void;
  clearSelectedSet: () => void;
  sortTask: (criteria: "name" | "priority" | "dueDate") => void;
}

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

  // Set to store selected task
  const [selectedTaskSet, setSelectedSet] = useState<Set<number>>(new Set());

  // Function adding a new task upon Creation
  const addTask = (task: Task) => {
    setTasksMap((prevMap) => {
      const updatedMap = new Map(prevMap);

      updatedMap.set(task.taskID, task);

      return updatedMap;
    });

    setTaskOrder((prevOrder) => [...prevOrder, task.taskID]);
  };

  // Function to remove a task based on the id number
  const removeTask = (id: number) => {
    setTasksMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.delete(id);
      return updatedMap;
    });

    setTaskOrder((prevOrder) => prevOrder.filter((taskID) => taskID! == id));
  };

  const completeTask = (id: number) => {
    setTasksMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      const task = updatedMap.get(id);

      if (task) {
        task.isCompleted = !task.isCompleted;

        updatedMap.set(id, task);
      }

      return updatedMap;
    });
  };

  const selectTask = (id: number) => {
    setSelectedSet((prevSelectedSet) => {
      const updatedSelectedSet = new Set(prevSelectedSet);

      if (updatedSelectedSet.has(id)) {
        updatedSelectedSet.delete(id);
      } else {
        updatedSelectedSet.add(id);
      }

      return updatedSelectedSet;
    });
  };

  const clearSelectedSet = () => {
    setSelectedSet(new Set());
  };

  const sortTask = (criteria: "name" | "priority" | "dueDate") => {};

  return (
    <TaskContext.Provider
      value={{
        tasksMap,
        taskOrder,
        selectedTaskSet,
        addTask,
        removeTask,
        completeTask,
        sortTask,
        selectTask,
        clearSelectedSet,
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
