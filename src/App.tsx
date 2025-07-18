import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./features/home/HomePage";
import AppLayout from "./ui/AppLayout";
import ContactPage from "./features/contact/ContactPage";
import AboutPage from "./features/about/AboutPage";
import SignupPage from "./features/signup/SignupPage";
import ProductPage from "./features/product/ProductPage";
import CheckoutPage from "./features/checkout/CheckoutPage";
import RequireNoAuth from "./ui/RequireNoAuth";
import RequireAuth from "./ui/RequireAuth";
import CheckoutSuccessful from "./features/checkout/CheckoutSuccessful";
import AdminPage from "./features/admin/AdminPage";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <ProductsPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/signup',
      element: (
        <RequireNoAuth>
          <SignupPage />
        </RequireNoAuth>
      )
    },
    {
      path: '/product/:id',
      element: <ProductPage />,
    },
    {
      path: '/checkout/:id',
      element: (
        <RequireAuth >
          <CheckoutPage />
        </RequireAuth>
      )
    },
    {
      // MAKE THIS PAGE DEPEND ON THE ORDER ID!!
      path: '/order/successful',
      element: <CheckoutSuccessful />
    },
    // {
    //   path: '/admin',
    //   element: <AdminPage />
    // }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
