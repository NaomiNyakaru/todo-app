import App from './App'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import SingleTodo from './pages/SingleTodo';

const routes = [
    {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/todo/:todoId',
        element: <SingleTodo  />
      }
    ]
  }
    

  ];
  
  export default routes;