import { createBrowserRouter, RouterProvider } from "react-router";
import ClientLayout from "../layouts/ClientLayout";
import clientRoutes from "./clientRoutes";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import adminRoutes from "./adminRoutes";
import LoginPage from "../pages/common/LoginPage";
import RegisterPage from "../pages/common/RegisterPage";
import NotFoundPage from "../pages/common/NotFoundPage";

const routes = createBrowserRouter([
  //*Layout Client
  { path: "/", element: <ClientLayout />, children: clientRoutes },
  //*Layout Admin
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <AdminLayout />, children: adminRoutes }],
  },
  //*Empty Layout
  { path: "auth/login", element: <LoginPage /> },
  { path: "auth/register", element: <RegisterPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
const AppRouter = () => {
  return <RouterProvider router={routes} />;
};
export default AppRouter;
