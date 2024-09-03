import React, {createContext, useState, useContext} from "react";
import Task from "../classes/Task";

interface TaskContextInterface {
    tasks: Task[] // Array of Task
    createTask: (task: Task) => void; // Function to create a new task
    setTask: React.Dispatch<React.SetStateAction<Task[]>>; //
    filterChoice: string | null; //Current filter choice
    setFilterChoice: React.Dispatch<React.SetStateAction<string | null>>;
    sortChoice: string | null; //Current sort choice 
    setSortChoice: React.Dispatch<React.SetStateAction<string | null>>;
    
}


const TaskContext = createContext<TaskContextInterface | undefined>(undefined)

const useTaskContext = () => {
  const context = useContext(TaskContext)

  if(!context) {
    throw new Error("function must be used within a a TaskProvider component,")
  }

  return context;
   
}



export const TaskProvider: React.FC = ({children}) => {
  return(
    
  )
}