import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Task } from '@/store/models.ts';

export const useTaskStore = defineStore('task', () => {

  const tasks: Ref<Task[]> = ref(
  [
    {
      id: "1",
      value: "Задача 1",
      isBug: false,
    },
    {
      id: "2",
      value: "Задача 2",
      isBug: true,
    },
    {
      id: "3",
      value: "Задача 3",
      isBug: false,
    },
  ]);

  function addNewTask(value:string, isBug: boolean) {
    const newTask: Task = {
      id: window.crypto.randomUUID(),
      value: value,
      isBug: isBug,
    };
    tasks.value.push(newTask);
  }

  function removeTask( id : string): void {
    const idx = findItemIdxById(id);
    tasks.value.splice(idx, 1);  
  }

  function editTask(id: string, value: string, isBug: boolean): void {  
    tasks.value = tasks.value.map((el) => {    
      if (el.id === id) {
        return {
          ...el,
          value: value,
          isBug: isBug,
        };
      }
      return el;
    });
  }

  function getTaskValueById(id: string): string { 
    
    return getTaskById(id)?.value ?? "";
  }

  function getTaskById(id: string): Task {
    return tasks.value.find(el=> el.id == id);
  }

  function isBug(id: string): boolean { 
    return getTaskById(id)?.isBug ?? false;
  }

  function findItemIdxById(id: string): number {
    return tasks.value.findIndex((el) => el.id === id);
  }

  return {
    tasks,
    isBug,
    editTask,
    addNewTask,
    removeTask,
    getTaskValueById,
  };
});
