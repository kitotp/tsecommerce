import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./features/home/HomePage";
import AppLayout from "./ui/AppLayout";
import ContactPage from "./features/contact/ContactPage";
import AboutPage from "./features/about/AboutPage";
import SignupPage from "./features/signup/SignupPage";


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
      element: <SignupPage />
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
