import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPostForm from "./features/posts/EditPostForm";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:postId",
        element: <SinglePostPage />,
      },
      {
        path: "/post/edit/:postId",
        element: <EditPostForm />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
