import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import RootLayout from './components/RootLayout';
import UrlUser from './components/UrlUser';
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to={"/sign-in"} replace />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;