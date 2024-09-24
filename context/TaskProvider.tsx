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
  sortTask: (criteria: "name" | "priority" | "dueDate" | "none" | null) => void;
  filterTask: (criteria: "completion_status" | "none" | null) => void;
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

    // Filter out any task that matches the id that was passed in
    setTaskOrder((prevOrder) => prevOrder.filter((taskID) => taskID! == id));
  };

  // Pass in a set of id's mark them complete or incomplete if selected.
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

  // Marks a task selected while a task is selected it is added to of id's that are also selected
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

  // Pass in a criteria and sort the task in order by the following provided criteria
  const sortTask = (
    criteria: "name" | "priority" | "dueDate" | "none" | null
  ) => {
    setTaskOrder((prevOrder) => {
      let sortedOrder = [...prevOrder];

      // sort by alphabetical order
      if (criteria === "name") {
        sortedOrder.sort((a, b) => {
          const taskA = tasksMap.get(a);
          const taskB = tasksMap.get(b);

          return taskA && taskB ? taskA.name.localeCompare(taskB.name) : 0;
        });
      } else if (criteria === "dueDate") {
        // sort by each task due date the sooner the higher up it'll be displayed
        sortedOrder.sort((a, b) => {
          const taskA = tasksMap.get(a);
          const taskB = tasksMap.get(b);

          return taskA && taskB
            ? new Date(taskA.dueDate).getTime() -
                new Date(taskB.dueDate).getTime()
            : 0;
        });
      } else if (criteria === "priority") {
        // sort by priority the more important the higher it'll be displayed
        sortedOrder.sort((a, b) => {
          const taskA = tasksMap.get(a);
          const taskB = tasksMap.get(b);

          if (taskA && taskB) {
            if (taskA.priority === "High" && taskB.priority !== "High")
              return -1;
            if (taskA.priority === "Medium" && taskB.priority === "Low")
              return -1;
            if (taskA.priority === "Low" && taskB.priority !== "Low") return 1;
            return 0;
          }

          return 0;
        });
      } else if (criteria === "none") {
        // Nothing to sort by return original order
        return sortedOrder;
      }

      return sortedOrder;
    });
  };

  // Filters task by passed in criteria
  const filterTask = (criteria: "completion_status" | "none" | null) => {
    setTaskOrder((prevOrder) => {
      let filterOrder = [...prevOrder];

      // Filters task based on completion
      if (criteria === "completion_status") {
        filterOrder = filterOrder.filter((a) => {
          const taskA = tasksMap.get(a);

          return taskA ? taskA.isCompleted : false;
        });
      } else if (criteria === "none") {
      }

      return filterOrder;
    });
  };

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
        filterTask,
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
