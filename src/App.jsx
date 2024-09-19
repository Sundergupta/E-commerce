import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import RootLayout from './components/RootLayout';

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
    ]
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