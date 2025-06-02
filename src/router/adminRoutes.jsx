import BlogFormPage from "../pages/admin/BlogFormPage";
import BlogListPage from "../pages/admin/BlogListPage";
import CategoryFormPage from "../pages/admin/CategoryFormPage";
import CategoryListPage from "../pages/admin/CategoryListPage";
import DashBoardPage from "../pages/admin/DashBoardPage";
import OrderDetailPage from "../pages/admin/OrderDetailPage";
import OrderListPage from "../pages/admin/OrderListPage";
import ProductDetailPage from "../pages/admin/ProductDetailPage";
import ProductForm from "../pages/admin/ProductForm";
import ProductListPage from "../pages/admin/ProductListPage";
import ProductUpdatePage from "../pages/admin/ProductUpdatePage";
import ProfilePage from "../pages/admin/ProfilePage";
import SettingsPage from "../pages/admin/SettingsPage";
import UserListPage from "../pages/admin/UserListPage";

const adminRoutes = [
  // *Common Routes
  { index: true, element: <DashBoardPage /> },
  { path: "settings", element: <SettingsPage /> },
  { paht: "me/profile", element: <ProfilePage /> },

  //*Products and Categories Routes
  { path: "products", element: <ProductListPage /> },
  { path: "products/add", element: <ProductForm /> },
  { path: "products/:id", element: <ProductDetailPage /> },
  { path: "products/edit/:id", element: <ProductUpdatePage /> },
  { path: "categories", element: <CategoryListPage /> },
  { path: "categories/add", element: <CategoryFormPage /> },
  { path: "categories/update/:id", element: <CategoryFormPage /> },
  { path: "orders/:id", element: <OrderDetailPage /> },
  { path: "orders", element: <OrderListPage /> },

  //*Blog Routes
  { path: "blogs", element: <BlogListPage /> },
  { path: "blogs/add", element: <BlogFormPage /> },
  { path: "blogs/edit/:id", element: <BlogFormPage /> },

  //*User Routes
  { path: "users", element: <UserListPage /> },
];

export default adminRoutes;
