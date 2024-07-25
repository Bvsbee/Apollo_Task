export default class Task {
  name: string;
  priority: string;
  dueDate: string;
  description: string;
  note: string;

  constructor(
    name: string,
    priority: string,
    dueDate: string,
    description: string,
    note: string
  ) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.note = note;
  }
}
