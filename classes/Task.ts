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
    desciption: string,
    note: string
  ) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = desciption;
    this.note = note;
  }
}
