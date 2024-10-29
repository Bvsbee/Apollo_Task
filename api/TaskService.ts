import api from "./api";
import Task from "../classes/Task";

export default class TaskService {
  async fetchTask(): Promise<Task[]> {
    try {
      const response = await api.get<Task[]>("/tasks");
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks", error);
      throw error;
    }
  }

  async addTask(task: Task): Promise<Task> {
    try {
      const response = await api.post<Task>("/tasks", task);
      return response.data;
    } catch (error) {
      console.error("Error adding tasks", error);
      throw error;
    }
  }

  async deleteTask(id: string): Promise<Task> {
    try {
      const response = await api.delete<Task>(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error adding tasks", error);
      throw error;
    }
  }
}
