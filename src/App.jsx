import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout, { RequireAuth } from "./routes/layout/layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct imports
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/login/Login";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/Register";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { singlePageLoader, listPageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>,
          loader: listPageLoader
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader: singlePageLoader
        },

        
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children:[
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>
        },
        {
          path: "/add",
          element: <NewPostPage/>
        },
      ]
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
