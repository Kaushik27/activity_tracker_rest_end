
export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
}


export const tasks: TaskData[] = [
  { id: 1, title: 'Install Node', completed: true },
  { id: 2, title: 'Install React Native CLI:', completed: false },
  { id: 3, title: 'Install Xcode', completed: false },
  { id: 4, title: 'Morning Jog', completed: true },
  { id: 5, title: 'Visit the gym', completed: false }
];
