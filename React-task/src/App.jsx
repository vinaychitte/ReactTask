import TodoList from './components/TodoList.jsx';
import TodoContextProvider from './store/todo-list-context.jsx';
import TodoInput from './components/ToDoInput.jsx';

function App() {
  return (
    <TodoContextProvider>
        <TodoInput/>
        <TodoList/>
        </TodoContextProvider>
      );
    }

export default App;
