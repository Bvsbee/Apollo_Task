export default class Task {
  taskID: number;
  name: string;
  priority: string;
  dueDate: string;
  description: string;
  note: string;
  isCompleted: boolean;

  constructor(
    taskID: number,
    name: string,
    priority: string,
    dueDate: string,
    description: string,
    note: string,
    isCompleted: boolean
  ) {
    this.taskID = taskID;
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.note = note;
    this.isCompleted = isCompleted;
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
    return this.description;
  }

  getNote(): string {
    return this.note;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPriority(priority: string): void {
    this.priority = priority;
  }

  setDescription(description: string): void {
    this.description = this.description;
  }

  setNote(note: string): void {
    this.note = note;
  }

  taskCompleted(): boolean {
    return this.isCompleted;
  }
}
