import BlogFormPage from "../pages/admin/BlogFormPage";
import BlogListPage from "../pages/admin/BlogListPage";
import CategoryFormPage from "../pages/admin/CategoryFormPage";
import CategoryListPage from "../pages/admin/CategoryListPage";
import DashBoardPage from "../pages/admin/DashBoardPage";
import OrderDetailPage from "../pages/admin/OrderDetailPage";
import OrderListPage from "../pages/admin/OrderListPage";
import ProductForm from "../pages/admin/ProductForm";
import ProductListPage from "../pages/admin/ProductListPage";
import ProfilePage from "../pages/admin/ProfilePage";
import SettingsPage from "../pages/admin/SettingsPage";
import UserListPage from "../pages/admin/UserListPage";

const adminRoutes = [
  // *Common Routes
  { index: true, elememt: <DashBoardPage /> },
  { path: "settings", elememt: <SettingsPage /> },
  { paht: "me/profile", elememt: <ProfilePage /> },

  //*Products and Categories Routes
  { path: "products", elememt: <ProductListPage /> },
  { paht: "products/add", elememt: <ProductForm /> },
  { path: "products/edit/:id", elememt: <ProductForm /> },
  { path: "categories", elememt: <CategoryListPage /> },
  { path: "categories/add", elememt: <CategoryFormPage /> },
  { path: "categories/update/:id", elememt: <CategoryFormPage /> },
  { path: "orders/:id", element: <OrderDetailPage /> },
  { path: "orders", element: <OrderListPage /> },

  //*Blog Routes
  { path: "blogs", elememt: <BlogListPage /> },
  { path: "blogs/add", elememt: <BlogFormPage /> },
  { path: "blogs/edit/:id", elememt: <BlogFormPage /> },

  //*User Routes
  { path: "users", elememt: <UserListPage /> },
];

export default adminRoutes;
