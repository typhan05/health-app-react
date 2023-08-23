import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TopPage from "../components/pages/TopPage";
import Layout from "../components/layouts";
import MyRecordPage from "../components/pages/MyRecordPage";
import ColumnPage from "../components/pages/ColumnPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <TopPage /> },
      { path: "/my-record", element: <MyRecordPage /> },
      { path: "/column", element: <ColumnPage /> },
    ],
  },
];

export const Router = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
