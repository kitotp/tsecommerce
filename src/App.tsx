import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./features/home/HomePage";
import CartPage from "./features/cart/CartPage";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <ProductsPage />
    },
    {
      path: '/cart',
      element: <CartPage />
    }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
