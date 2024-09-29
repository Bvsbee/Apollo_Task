import uuid from "react-native-uuid";
import { PriorityEnum } from "../enums/PriorityEnum";

// Task class responsible for defining a task.
export default class Task {
  taskID: string;
  //Act's as the name/title for the task
  name: string;

  //Task priority's (High, Medium, Low)
  priority: string;

  // Due date for the task
  dueDate: string;

  // Optional  description for the task
  desc: string;

  // Status for if the task is currently selected
  isSelected: boolean;

  // Status for if the task is currently completed or not.
  isCompleted: boolean;

  constructor(
    taskID: string,
    name: string,
    priority: string,
    dueDate: string,
    desc: string,
    isSelected: boolean,
    isCompleted: boolean
  ) {
    // Allow's for unique task id's
    this.taskID = String(uuid.v4());
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.desc = desc;
    this.isSelected = isSelected;
    this.isCompleted = isCompleted;
  }

  //Getters and setter's for each task property

  getTaskID(): string {
    return this.taskID;
  }

  getName(): string {
    return this.name;
  }

  getPriority(): string {
    return this.priority;
  }

  getDueDate(): string {
    return this.dueDate;
  }

  getDescription(): string {
    return this.desc;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPriority(priority: PriorityEnum): void {
    this.priority = priority;
  }

  setDescription(desc: string): void {
    this.desc = this.desc;
  }

  taskSelected(): boolean {
    return this.isSelected;
  }

  taskCompleted(): boolean {
    return this.isCompleted;
  }
}
