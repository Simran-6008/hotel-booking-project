import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookingPage from "./COMPONENTS/BookingPage.jsx";
import ReservedPage from "./COMPONENTS/ReservedPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bookingPageCompo",
    element: <BookingPage />,
  },
  {
    path: "/lastPage",
    element: <ReservedPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
