import React, {createContext, useState, useContext, ReactNode} from "react";
import Task from "../classes/Task";


interface TaskContextInterface {
    tasks: Task[] // Array of Task
    addNewTask: (task: Task) => void; // Function to add a new task
    setTask: React.Dispatch<React.SetStateAction<Task[]>>; //
    filterChoice: string | null; //Current filter choice
    setFilterChoice: (choice: string | null) => void;
    sortChoice: string | null; //Current sort choice 
    setSortChoice: React.Dispatch<React.SetStateAction<string | null>>;
    
}

interface TaskProviderProps {
  children: ReactNode
}


const TaskContext = createContext<TaskContextInterface | undefined>(undefined)

const useTaskContext = () => {
  const context = useContext(TaskContext)

  if(!context) {
    throw new Error("function must be used within a a TaskProvider component,")
  }

  return context;
   
}



export const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasks, setTask] = useState<Task[]>([])
    const[newTaskID, setNewTaskID] = useState(0);
    const [sortChoice, setSortChoice] = useState<string | null>(null)
    const [filterChoice, setFilterChoice] = useState<string | null>(null);


    

    const addNewTask = (task: Task) => {
        setTask(prevTask =>[...prevTask, task]);
        setNewTaskID(newTaskID + 1);
    };

    const toggleTaskCompletion= (task: Task) => {
        
        
        
    }


  return(
    

  )
}