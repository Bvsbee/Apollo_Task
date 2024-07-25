export default class Task {
  name: string;
  priority: string;
  dueDate: string;
  description: string;
  note: string;
  completedTask: boolean;

  constructor(
    name: string,
    priority: string,
    dueDate: string,
    description: string,
    note: string,
    completedTask: boolean
  ) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.note = note;
    this.completedTask = completedTask;
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
    return this.completedTask;
  }
}
