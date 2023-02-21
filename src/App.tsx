import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultBox from "./richTextBox/DefaultBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultBox />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

// Wrap the App component with the hot function
export default App;
