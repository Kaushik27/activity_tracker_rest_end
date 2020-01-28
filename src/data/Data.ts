export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  status: boolean;
}

export const tasks: TaskData[] = [
         { id: 1, title: 'Install Node', completed: false, status: false },
         {
           id: 2,
           title: 'Install React Native CLI:',
           completed: false,
           status: false
         },
         { id: 3, title: 'Install Xcode', completed: false, status: false },
         { id: 4, title: 'Morning Jog', completed: false, status: false },
         { id: 5, title: 'Visit the gym', completed: false, status: false }
       ];
