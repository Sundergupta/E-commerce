import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import RootLayout from './components/RootLayout';
import UrlUser from './components/UrlUser';
import Home from './screens/Home';
import MenListPage from './screens/MenListPage';
import WomenListPage from './screens/WomeListpage';
import { getDatabase } from 'firebase/database';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "List",
        element: <WomenListPage />,
      },
      {
        path: "MenListPage",
        element: <MenListPage />,
      },
      {
        path: "WomenListPage",
        element: <WomenListPage />,
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/sign-in"} replace />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
