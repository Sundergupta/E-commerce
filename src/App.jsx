import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// import './App.css';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import RootLayout from './components/RootLayout';
import UrlUser from './components/UrlUser';
import Home from './screens/Home';
import MenListPage from './screens/MenListPage';
import WomenListPage from './screens/WomeListpage';
import { getDatabase } from 'firebase/database';
import { useSelector } from 'react-redux';
import DetailPage from './screens/DetailPage';
import Payment from './screens/Payment';



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
      {
        path: "DetailPage",
        element: <DetailPage />
      },
      {
        path: "Payment",
        element: <Payment />,
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
  const user = useSelector((state) => state.user)
  console.log("Inside App ", user)
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
