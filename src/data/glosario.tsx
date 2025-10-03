export type TaskType = 'investigacion' | 'proyecto';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  url?: string;
  tags?: string[];
  content?: string;  
       
}


